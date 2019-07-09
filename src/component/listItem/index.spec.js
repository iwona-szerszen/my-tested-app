import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAtrribute, checkProps } from '../../../utils/index';

describe('ListItem component', () => {

	describe('Checking PropTypes', () => {

		it('Should NOT throw a warning', () => {

			const expectedProps = {
				title: 'Example title',
				desc: 'Example desc'
			};
			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();

		});

	});

	describe('Component renders', () => {

		let wrapper;
		beforeEach(() => {
			const props = {
				title: 'Example title',
				desc: 'Example desc'
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it('Should render without error', () => {
			const component = findByTestAtrribute(wrapper, 'listItemComponent');
			expect(component.length).toBe(1);
		});

		it('Should render a title', () => {
			const title = findByTestAtrribute(wrapper, 'componentTitle');
			expect(title.length).toBe(1);
		});

		it('Should render a description', () => {
			const desc = findByTestAtrribute(wrapper, 'componentDesc');
			expect(desc.length).toBe(1);
		});

	});

	describe('Should NOT render', () => {

		let wrapper;
		beforeEach(() => {
			const props = {
				desc: 'Example desc'
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it('is not rendered', () => {
			const component = findByTestAtrribute(wrapper, 'listItemComponent');
			expect(component.length).toBe(0);
		});

	});


});