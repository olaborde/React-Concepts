import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import store from './store';
import {Provider} from 'react-redux';
import './index.css'

// connecting store with view using provider
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'))