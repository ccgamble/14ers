import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import BasicInfo from '../lib/components/BasicInfo'
import data from '../lib/data'
const sinon = require('sinon')

describe('BasicInfo', () => {
	it('renders a snapshot-container', () => {
		const wrapper = shallow(<BasicInfo location={data[0]}/>)
		assert(wrapper.find('.snapshot-container'))
	});
	it('renders 7 different pieces of data', () => {
		const wrapper = shallow(<BasicInfo location={data[0]}/>)
		assert(wrapper.find('.snapshot-label').length, 7)
	})
	it('renders a button to mark mountain as a favorite', () => {
		const wrapper = shallow(<BasicInfo location={data[0]}/>)
		assert(wrapper.find('.favorites-button').length, 1)
	})
	it.skip('saves mountain to list of favorites when button is clicked', () => {
		const wrapper = shallow(<BasicInfo location={data[0]}/>)
		wrapper.find('.favorites-button').simulate('click')
		expect(wrapper.state('favorites').length, 1)

	})
})
