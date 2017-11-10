import { createStore } from 'redux';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

export const history = createHistory();
