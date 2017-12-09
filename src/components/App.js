import React from 'react';
import Landing from './landing';
import Wedo from './wedo';

class App extends React.Component {
    render() {
        return (
            <div>
            <Landing />
            <Wedo />
            </div>
        )
    }
}

export default App;