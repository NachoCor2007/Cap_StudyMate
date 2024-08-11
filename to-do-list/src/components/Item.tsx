import React from 'react';
import ItemProps from "./ItemProps";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface UpdatableItemProps extends ItemProps {
    onCheck: (id: number) => void
}

const Item: React.FC<UpdatableItemProps> = ({ id, name, isDone, onCheck }: UpdatableItemProps) => {
    return (
        <div>
            <label>
                {name}
                <Checkbox {...label} checked={isDone} color="success" onChange={() => onCheck(id)} />
            </label>
        </div>
    );
}

export default Item;
