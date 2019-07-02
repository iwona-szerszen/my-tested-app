export const findByTestAtrribute = (component, atrribute) => {
	const wrapper = component.find(`[data-test='${atrribute}']`);
	return wrapper;
};