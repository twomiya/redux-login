import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { createStore ,applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import rootReducer from './reducers';
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger,thunk)
    )
);

    

    
ReactDOM.render(
    <Provider store={store}>
        <Router routes={ routes }>
            <div>
                <NavigationBar />
                { routes }
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
