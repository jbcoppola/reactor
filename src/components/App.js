import React from 'react';
import Landing from './landing';
import Wedo from './wedo';
import Greenbar from './greenbar';
import Locations from './locations';

class App extends React.Component {
    render() {
        return (
            <div>
            <Landing />
            <Wedo />
            <Greenbar />
            <Locations />
            </div>
        )
    }
}

export default App;