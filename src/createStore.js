import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/index';

export const middlewars = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewars)(createStore); 

export const store = createStoreWithMiddleware(RootReducer);