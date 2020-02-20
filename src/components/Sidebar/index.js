import React, {Component} from "react";
import './index.scss'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


class Sidebar extends Component {

    constructor() {
        super();

        this.state = {
            users: []
        };

        this.showUserDetails = this.showUserDetails.bind(this);
    }

    async componentDidMount() {
        const res = await fetch('https://randomuser.me/api/?results=20').then(res => res);

        if (res.ok) {
            const users = await res.json();
            this.setState({users: users.results});
        } else {
            console.error('Error request!', res);
        }

        console.log('users list: ', this.state.users);
    }

    showUserDetails = (e) => {
        const user = this.state.users.find(user => user.login.username == e.target.dataset.username);
        this.props.userDetails(user);
    };

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
                    primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
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
