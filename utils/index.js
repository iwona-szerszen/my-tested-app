import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import RootReducer from '../src/reducers/index';
import { middlewars } from '../src/createStore'

export const findByTestAtrribute = (component, atrribute) => {
	const wrapper = component.find(`[data-test='${atrribute}']`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErr;
};

export const testStore = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middlewars)(createStore); 
	return createStoreWithMiddleware(RootReducer, initialState);
};