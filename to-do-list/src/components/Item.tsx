import React from 'react';
import ItemProps from "./ItemProps";

const Item: React.FC<ItemProps> = ({ id, name, isDone }: ItemProps) => {
    return (
        <div>
            <label>{name} <input type="checkbox" checked={isDone}/></label>
        </div>
    );
}

export default Item;
