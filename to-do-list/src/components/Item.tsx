import React, {useState} from 'react';
import ItemProps from "./ItemProps";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface UpdatableItemProps extends ItemProps {
    onEdition: (task: ItemProps) => void;
    onDeletion: (id: number) => void;
}

const Item: React.FC<UpdatableItemProps> = ({ id, name, isDone, onEdition, onDeletion}: UpdatableItemProps) => {
    const [ableToEdit, setAbleToEdit] = useState(false);

    return (
        <ListItem>
            <ListItemButton sx={{ width: '1%' }} onClick={() => onDeletion(id)} >
                <DeleteIcon sx={{ width: '100%', color: 'red' }} />
            </ListItemButton>
            <ListItemButton sx={{ width: '1%' }} onClick={() => setAbleToEdit(!ableToEdit)} >
                <EditIcon sx={{ width: '100%', color: 'blue' }}/>
            </ListItemButton>
            <ListItemButton sx={{ width: '80%' }} onClick={() => onEdition({id: id, name: name, isDone: !isDone})} >
                <Checkbox {...label} checked={isDone} color="success" />
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}

export default Item;
