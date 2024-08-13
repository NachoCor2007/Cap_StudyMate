import React, {useEffect, useState} from 'react';
import axios from "axios";
import Item from "./Item";
import AddItem from "./AddItem";
import {List, Typography} from "@mui/material";
import ItemProps from "./ItemProps";

const startURL: string = "http://localhost:4567/";

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
                let modifiedTasks: ItemProps[] = r.data;
                console.log("Added task: ", modifiedTasks);
                setTasks(modifiedTasks);
            })
    }

    const onEdition = (task: ItemProps) => {
        axios.put(startURL + "put/" + task.id, task)
            .then(r => {
                let modifiedTasks: ItemProps[] = r.data;
                console.log("Edited task: ", modifiedTasks);
                setTasks(modifiedTasks);
            })
    }

    const onDeletion = (id: number) => {
        axios.delete(startURL + "delete/" + id)
            .then(r => {
                let modifiedTasks: ItemProps[] = r.data;
                console.log("Deleted task", modifiedTasks);
                setTasks(modifiedTasks);
            })
    }

    return (
        <>
            <Typography variant="h2" gutterBottom sx={{ width: '100%', px: 40, pt: 20 }} >
                Lista de Tareas
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
