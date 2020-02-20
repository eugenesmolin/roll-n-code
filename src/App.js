import React, {Component} from 'react';
import './App.scss'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

class App extends Component {

    constructor() {
        super();

        this.state = {
            users: null,
            userDetails: null
        };

        this.changeUserDetails = this.changeUserDetails.bind(this);
    }

    async componentDidMount() {
        const res = await fetch('https://randomuser.me/api/?results=20').then(res => res);

        if (res.ok) {
            const users = await res.json();
            this.setState({
                users: users.results,
                userDetails: {}
            });
        } else {
            console.error('Error request!', res);
        }

        console.log('users list: ', this.state.users);
        console.log('user details: ', this.state.userDetails);
    }

    changeUserDetails = (id) => {
        const user = this.state.users.find(user => user.login.username === id);
        this.setState({userDetails: user})
    };

    render() {

        if (this.state.users == null && this.state.userDetails == null) {
            return (
                <div className="load-container">
                    <div className="loader">
                        <div className="loader-inner loader-inner--one"></div>
                        <div className="loader-inner loader-inner--two"></div>
                        <div className="loader-inner loader-inner--three"></div>
                        <div className="loader-text">Loading...</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="App">
                <Header/>

                <Sidebar changeUserDetails={this.changeUserDetails} users={this.state.users}/>

                <Content user={this.state.userDetails}/>
            </div>
        );
    }
}

export default App;
