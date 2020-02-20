import React, {Component} from 'react';
import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

class App extends Component {

    constructor() {
        super();

        this.state = {
            user: {}
        };

        this.userDetails = this.userDetails.bind(this);
    }

    userDetails = async (value) => {
        console.log('update user: ', value)
        await this.setState({ user: value })
    };

    render() {
        return (
            <div className="App">

                <Header/>

                <Sidebar userDetails={this.userDetails}/>

                <Content user={this.state.user}/>

            </div>
        );
    }
}

export default App;
