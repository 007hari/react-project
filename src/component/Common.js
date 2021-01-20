import React, { Component } from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './template/Footer'
import AppRoute from './AppRoute'


export default class Common extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                   
                    <AppRoute/>
                    <Footer/>


                </Router>
                
            </React.Fragment>
        )
    }
}
