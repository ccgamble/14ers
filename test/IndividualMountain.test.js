import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import IndividualMountain from '../lib/components/IndividualMountain'
import data from '../lib/data'

describe ('IndividualMountain', () => {
	it('can mount with no properties', () => {
		const wrapper = shallow(<IndividualMountain />)
	});
	it('has constructor that sets state of weather to an empty array', function() {
		const wrapper = shallow(<IndividualMountain />);
		expect(wrapper.state('weather')).deep.equal([]);
	});
	it('has constructor that sets state of destination to an empty string', function() {
		const wrapper = shallow(<IndividualMountain />);
		expect(wrapper.state('destination')).deep.equal('');
	});
	it('has constructor that sets state of image to an empty array', function() {
		const wrapper = shallow(<IndividualMountain />);
		expect(wrapper.state('image')).deep.equal([]);
	});
	it('renders a div with the individual mountain info', () => {
		const wrapper = shallow(<IndividualMountain />);
		assert(wrapper.find('.individual-mountain'))
	})
});
