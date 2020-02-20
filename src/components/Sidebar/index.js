import React, {Component} from "react";
import './index.scss'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: props.users
        };

        this.showUserDetails = this.showUserDetails.bind(this);
    }

    showUserDetails = (e) => this.props.changeUserDetails(e.target.dataset.username);

    render() {
        const user = this.state.users.map((user, key) =>
            <ListItem
                key={key}
                data-username={user.login.username}
                className="sidebar-list__item"
                onClick={this.showUserDetails}
            >
                <ListItemAvatar>
                    <Avatar>
                        <img src={user.picture.thumbnail} alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.name.title}. ${user.name.first} ${user.name.last}`}
                    secondary={user.phone}/>
            </ListItem>
        );

        return (
            <List className="sidebar-list" component="nav" aria-label="main mailbox folders">
                {user}
            </List>
        )
    }
}

export default Sidebar;
