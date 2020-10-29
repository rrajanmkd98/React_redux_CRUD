import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/Reducer'

const middlewares = [thunk];

// https://www.npmjs.com/package/redux-logger
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
 
const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}
