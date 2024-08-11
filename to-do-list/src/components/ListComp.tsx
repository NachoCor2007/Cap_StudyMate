import React, {useEffect, useState} from 'react';
import ListProps from "./ListProps";
import Item from "./Item";
import {List, Typography} from "@mui/material";

const defaultTasks: ListProps = {
    items: [
        {id: 0, name: "Soy una task", isDone: false},
        {id: 1, name: "Soy otra task", isDone: true},
        {id: 2, name: "tercera task", isDone: false},
        {id: 3, name: "Una task más", isDone: false},
        {id: 4, name: "Soy la última task", isDone: true}
    ]
};

function getTasksInitialState() {
    return () => {
        // Checks if there are tasks saved in localStorage.
        const savedTasks = localStorage.getItem('tasks');
        // If there are, it parses the JSON and returns it. Else, it returns the default tasks.
        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
    };
}

const ListComp = () => {
    // Initializes the tasks.
    const [tasks, setTasks] = useState<ListProps>(getTasksInitialState());

    useEffect(() => {
        // Saves the tasks in localStorage.
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleCheck = (id: number) => {
        setTasks(prevTasks => {
            // Updates the task with the correspondent id.
            const updatedTasks = {
                ...prevTasks,
                items: prevTasks.items.map(item => {
                    if (item.id === id) {
                        item.isDone = !item.isDone;
                    }
                    return item;
                })
            };

            // Saves the updated tasks in localStorage.
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    }

    const handleDelete = (id: number) => {
        setTasks(prevTasks => {
            // Deletes the task with the correspondent id.
            const updatedTasks = {
                ...prevTasks,
                items: prevTasks.items.filter(item => item.id !== id)
            };

            // Saves the updated tasks in localStorage.
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    }

    return (
        <>
            <Typography variant="h2" gutterBottom sx={{ width: '100%', px: 40, pt: 20 }} >
                Lista de Tareas
            </Typography>
            <List sx={{ width: '100%', px: 40 }} >
                {tasks.items.map(item => (
                    <Item key={item.id} {...item} onCheck={handleCheck} onDeletion={handleDelete} />
                ))}
            </List>
        </>
    );
}

export default ListComp;
