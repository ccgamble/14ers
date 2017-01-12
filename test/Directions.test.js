import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Directions from '../lib/components/Directions'
import data from '../lib/data'

describe('Directions', () => {
	it('renders a iframe with google map', () => {
		const wrapper = shallow(<Directions location={data[0]}/>)
		assert(wrapper.find('iframe'))
	});
	it('renders with h4 header', () => {
		const wrapper = shallow(<Directions location={data[0]}/>)
		assert(wrapper.find('h4'))
	})
});
