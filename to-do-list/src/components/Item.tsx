import React from 'react';
import ItemProps from "./ItemProps";
import Checkbox from '@mui/material/Checkbox';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface UpdatableItemProps extends ItemProps {
    onCheck: (id: number) => void
}

const Item: React.FC<UpdatableItemProps> = ({ id, name, isDone, onCheck }: UpdatableItemProps) => {
    return (
        <ListItem>
            <ListItemButton onClick={() => onCheck(id)} >
                <Checkbox {...label} checked={isDone} color="success" />
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}

export default Item;
