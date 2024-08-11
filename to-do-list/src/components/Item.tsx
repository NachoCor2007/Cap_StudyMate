import React from 'react';
import ItemProps from "./ItemProps";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface UpdatableItemProps extends ItemProps {
    onCheck: (id: number) => void,
    onDeletion: (id: number) => void
}

const Item: React.FC<UpdatableItemProps> = ({ id, name, isDone, onCheck, onDeletion }: UpdatableItemProps) => {
    return (
        <ListItem>
            <ListItemButton sx={{ width: '1%' }} onClick={() => onDeletion(id)} >
                <DeleteIcon sx={{ width: '100%', color: 'red' }} />
            </ListItemButton>
            <ListItemButton sx={{ width: '80%' }} onClick={() => onCheck(id)} >
                <Checkbox {...label} checked={isDone} color="success" />
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}

export default Item;
