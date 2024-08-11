import React from 'react';
import ListProps from "./ListProps";
import Item from "./Item";

let tasks: ListProps = {
    items: [
        {id: 0, name: "task0", isDone: false},
        {id: 1, name: "task1", isDone: true},
        {id: 2, name: "task2", isDone: false},
        {id: 3, name: "task3", isDone: false},
        {id: 4, name: "task4", isDone: true}
    ]
}

const List = () => {
    return (
        <div>
            {tasks.items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}

export default List;
