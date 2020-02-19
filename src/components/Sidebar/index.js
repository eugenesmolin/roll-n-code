import React from "react";
import './index.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Sidebar() {
    return (
        <List className="sidebar" component="nav" aria-label="main mailbox folders">
            <ListItem button>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
    );
}

export default Sidebar;