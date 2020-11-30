// install depedency redux
// install depedency react-redux
// install redux-logger
// install redux-thunk

// Import createStore from redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = applyMiddleware(logger, ReduxThunk);

const store = createStore(rootReducer, middlewares);

export default store;
