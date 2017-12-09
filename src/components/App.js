import React from 'react';
import Landing from './landing';
import Wedo from './wedo';
import Greenbar from './greenbar';

class App extends React.Component {
    render() {
        return (
            <div>
            <Landing />
            <Wedo />
            <Greenbar />
            </div>
        )
    }
}

export default App;