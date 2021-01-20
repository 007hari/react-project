import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Thanku from './Thanku';

export default class AppRoute extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home}/>

                    <Route exact path="/thankyou" component={Thanku}/>

                </Switch>
                
            </React.Fragment>
        )
    }
}
