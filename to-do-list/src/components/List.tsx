import React, {useEffect, useState} from 'react';
import ListProps from "./ListProps";
import Item from "./Item";

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

const List = () => {
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

    return (
        <div>
            {tasks.items.map(item => (
                <Item key={item.id} {...item} onCheck={handleCheck} />
            ))}
        </div>
    );
}

export default List;
