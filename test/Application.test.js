import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from '../lib/components/Application'

const sinon = require('sinon')

describe ('Application', () => {
	it('can mount with no properties', () => {
		const wrapper = shallow(<Application />)
	});
	it('has constructor that sets state of data to an empty array', function() {
		const wrapper = shallow(<Application />);
		expect(wrapper.state('data')).deep.equal([]);
	});
	it('has constructor that sets state of user to null', function() {
		const wrapper = shallow(<Application />);
		expect(wrapper.state('user')).deep.equal(null);
	});
	it('has constructor that sets state of mountainDatabase to an empty array', function() {
		const wrapper = shallow(<Application />);
		expect(wrapper.state('mountainDatabase')).deep.equal([]);
	});
	it('has constructor that sets state of favorites to an empty array', function() {
		const wrapper = shallow(<Application />);
		expect(wrapper.state('favorites')).deep.equal([]);
	});
	it('renders as a <section>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'section')
  });

})
