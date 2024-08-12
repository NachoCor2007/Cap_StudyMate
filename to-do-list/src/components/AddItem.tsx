import React, {useState} from "react";
import {ListItem, ListItemButton} from "@mui/material";
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';

interface AddItemProps {
    onAddition: (name: string) => void
}

const AddItem: React.FC<AddItemProps> = ({onAddition}: AddItemProps) => {
    const [newTaskName, setNewTaskName] = useState('');

    return(
        <ListItem>
            <Icon
                baseClassName="fas"
                className="fa-plus-circle"
                sx={{ color: green[500] }}
            />

            {/*<ListItemButton sx={{ width: '1%' }} onClick={() => onAddition(newTaskName)}>*/}
            {/*</ListItemButton>*/}
            <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                value={newTaskName}
                multiline
                required
                variant="standard"
                onChange={e =>
                    setNewTaskName(e.target.value)
                }
            />
        </ListItem>
    );
}

export default AddItem;
