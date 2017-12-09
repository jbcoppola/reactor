import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

import Landing from './components/landing';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
