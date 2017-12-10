import React from 'react';
import Landing from './landing';
import Wedo from './wedo';
import Greenbar from './greenbar';
import Locations from './locations';
import Subscription from './subscription';
import Footer from './footer';

class App extends React.Component {
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

export default App;