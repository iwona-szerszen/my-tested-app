import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrribute } from '../../../utils/index';

const setUp = (props={}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe('Header component', () => {

	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should render without errors', () => {
		/* To print what shallow method has rendered:
		console.log(component.debug());
		*/
		const wrapper = findByTestAtrribute(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});

	it('Should render a logo', () => {
		const logo = findByTestAtrribute(component, 'logoIMG');
		expect(logo.length).toBe(1);
	});
});