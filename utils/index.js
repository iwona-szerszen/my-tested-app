import checkPropTypes from 'check-prop-types';

export const findByTestAtrribute = (component, atrribute) => {
	const wrapper = component.find(`[data-test='${atrribute}']`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErr;
};