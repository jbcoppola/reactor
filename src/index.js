import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();