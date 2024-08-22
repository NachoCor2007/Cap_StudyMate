import React, {useEffect, useState} from 'react';
import axios from "axios";
import Item from "./Item";
import AddItem from "./AddItem";
import {List, Typography} from "@mui/material";
import ItemProps from "./ItemProps";

const startURL: string = "http://localhost:4567/task/";

const ListComp: React.FC = () => {
    // Initializes the tasks.
    const [tasks, setTasks] = useState<ItemProps[]>([]);

    useEffect(() => {
        axios.get(startURL + "items")
            .then(r => {
                let retrievedTasks: ItemProps[] = r.data;
                console.log("Fetched tasks: ", retrievedTasks);
                setTasks(retrievedTasks);
            })
            .catch(error => console.log(error))
    }, []);

    const onAddition = (taskName: string) => {
        axios.post(startURL + "post", {name: taskName})
            .then(r => {
                let createdTask: ItemProps = r.data;
                console.log("Added task: ", createdTask);
                let modifiedTasks: ItemProps[] = [...tasks, createdTask];
                setTasks(modifiedTasks);
            })
    }

    const onEdition = (task: ItemProps) => {
        axios.put(startURL + "put/" + task.id, task)
            .then(r => {
                let modifiedTask: ItemProps = r.data;
                console.log("Edited task: ", modifiedTask);
                let modifiedTasks: ItemProps[] = tasks.map(item => {
                    if (item.id === modifiedTask.id) {
                        return modifiedTask;
                    } else {
                        return item;
                    }
                });
                setTasks(modifiedTasks);
            })
    }

    const onDeletion = (id: number) => {
        axios.delete(startURL + "delete/" + id)
            .then(r => {
                let deletedTask: ItemProps = r.data;
                console.log("Deleted task", deletedTask);
                let modifiedTasks: ItemProps[] = tasks.filter(item => item.id !== deletedTask.id);
                setTasks(modifiedTasks);
            })
    }

    return (
        <>
            <Typography variant="h2" gutterBottom sx={{ width: '100%', px: 40, pt: 20 }} >
                To-Do list
            </Typography>
            <List sx={{ width: '100%', px: 40 }} >
                {tasks.map(item => (
                    <Item key={item.id} {...item} onEdition={onEdition} onDeletion={onDeletion} />
                ))}
                <AddItem onAddition={onAddition} />
            </List>
        </>
    );
}

export default ListComp;
