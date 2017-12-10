import React from 'react';
import Landing from './landing';
import Wedo from './wedo';
import Greenbar from './greenbar';
import Locations from './locations';
import Subscription from './subscription';

class App extends React.Component {
    render() {
        return (
            <div>
            <Landing />
            <Wedo />
            <Greenbar />
            <Locations />
            <Subscription />
            </div>
        )
    }
}

export default App;