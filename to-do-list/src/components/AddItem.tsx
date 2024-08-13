import React, {useState} from "react";
import {ListItem, ListItemButton} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import axios from "axios";

const startURL: string = "http://localhost:4567/";

interface AddItemProps {
    onAddition: (taskName: string) => void;
}

const AddItem: React.FC<AddItemProps> = ({onAddition}: AddItemProps) => {
    const [newTaskName, setNewTaskName] = useState('');

    return(
        <ListItem sx={{ display: 'flex' }} >
            <ListItemButton sx={{ flexGrow: 2 }} onClick={() => {
                onAddition(newTaskName)
                setNewTaskName('');
            }}>
                <AddCircleIcon sx={{ width: '100%', color: 'green' }}/>
            </ListItemButton>
            <TextField
                id="standard-textarea"
                label="Add new task"
                value={newTaskName}
                sx={{ flexGrow: 50 }}
                multiline
                variant="filled"
                onChange={e =>
                    setNewTaskName(e.target.value)
                }
            />
        </ListItem>
    );
}

export default AddItem;
