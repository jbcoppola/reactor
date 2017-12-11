import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from '../landing';
import Wedo from '../wedo';
import Greenbar from '../greenbar';
import Locations from '../locations';
import Subscription from '../subscription';
import Footer from '../footer';

class Main extends React.Component {
    render() {
        return (
            <div>
            <Landing />
            <Wedo />
            <Greenbar />
            <Locations />
            <Subscription />
            <Footer />
            </div>
        )
    }
}

export default Main;