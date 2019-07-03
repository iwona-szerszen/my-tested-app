import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtrribute } from '../../../utils/index';

const setUp = (props={}) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe('Headline component', () => {

	describe('Have props', () => {

		let wrapper;
		beforeEach(() => {
			const props = {
				header: 'test header',
				description: 'test description'
			};
			wrapper = setUp(props);
		});

		it('Should render without errors', () => {
			const component = findByTestAtrribute(wrapper, 'headlineComponent');
			expect(component.length).toBe(1);
		});

		it('Should render a h1', () => {
			const h1 = findByTestAtrribute(wrapper, 'header');
			expect(h1.length).toBe(1);
		});

		it('Should render a description', () => {
			const description = findByTestAtrribute(wrapper, 'description');
			expect(description.length).toBe(1);
		});

	});

	describe('Have NO props', () => {

		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it('Should not render', () => {
			const component = findByTestAtrribute(wrapper, 'headlineComponent');
			expect(component.length).toBe(0);
		});

	});

});