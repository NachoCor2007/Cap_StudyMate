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
        <ListItem>
            <ListItemButton sx={{ width: '1%' }} onClick={() => onAddition(newTaskName)}>
                <AddCircleIcon sx={{ width: '100%', color: 'green' }}/>
            </ListItemButton>
            <TextField
                id="standard-textarea"
                label="Add new task"
                value={newTaskName}
                sx={{ width: '80%' }}
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
