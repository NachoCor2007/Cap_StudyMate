import React from 'react';
import ListProps from "./ListProps";
import Item from "./Item";

const List: React.FC<ListProps> = ({ items }: ListProps) => {
    return (
        <div>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}

export default List;
