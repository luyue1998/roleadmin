import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

import './stylus/index.less'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import {HashRouter, Route} from 'react-router-dom'

const Main = () =>{
    return (
        <Provider store={store}>
            <HashRouter basename='/'>
                <Route path={`/`} component={App}></Route>
            </HashRouter>
        </Provider>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
