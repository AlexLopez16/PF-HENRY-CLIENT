import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

// const composeEnhancers = (typeof window !== 'undefined' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)



