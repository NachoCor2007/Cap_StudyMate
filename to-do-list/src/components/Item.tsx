import React, {useState} from 'react';
import ItemProps from "./ItemProps";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Checkbox from '@mui/material/Checkbox';
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import TextField from "@mui/material/TextField";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface UpdatableItemProps extends ItemProps {
    onEdition: (task: ItemProps) => void;
    onDeletion: (id: number) => void;
}

const Item: React.FC<UpdatableItemProps> = ({ id, name, isDone, onEdition, onDeletion}: UpdatableItemProps) => {
    const [ableToEdit, setAbleToEdit] = useState(false);
    const [newTaskName, setNewTaskName] = useState(name);

    return (
        <ListItem sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
            <ListItemButton sx={{ flexGrow: 1 }} onClick={() => onDeletion(id)} >
                <DeleteIcon sx={{ width: '100%', color: 'red' }} />
            </ListItemButton>
                {ableToEdit ?
                    <>
                        <ListItemButton sx={{ flexGrow: 0.5 }} onClick={() => {
                            setAbleToEdit(!ableToEdit);
                            onEdition({id: id, name: newTaskName, isDone: isDone});
                        }} >
                            <CheckCircleIcon sx={{ width: '100%', color: 'green' }}/>
                        </ListItemButton>
                        <ListItemButton sx={{ flexGrow: 0.5 }} onClick={() => {
                            setAbleToEdit(!ableToEdit);
                            setNewTaskName(name);
                        }} >
                            <CancelIcon sx={{ width: '100%', color: 'red' }}/>
                        </ListItemButton>
                    </>
                    :
                    <ListItemButton sx={{ flexGrow: 1 }} onClick={() => setAbleToEdit(!ableToEdit)} >
                        <EditIcon sx={{ width: '100%', color: 'blue' }}/>
                    </ListItemButton>
                }
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 50 }} >
                {ableToEdit ?
                    <>
                        <TextField
                            id="standard-textarea"
                            label="Edit task name"
                            value={newTaskName}
                            sx={{ flexGrow: 50 }}
                            multiline
                            variant="filled"
                            onChange={e =>
                                setNewTaskName(e.target.value)
                            }
                        />
                    </>
                    :
                    <>
                        <Checkbox {...label} checked={isDone} color="success" onClick={() => onEdition({id: id, name: name, isDone: !isDone})} />
                        <ListItemText primary={name} />
                    </>
                }
            </Box>
        </ListItem>
    );
}

export default Item;
