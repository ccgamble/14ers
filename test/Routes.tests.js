import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Routes from '../lib/components/Routes'
import data from '../lib/data'

describe ('Routes', () => {
	it('renders a div with the route info', () => {
		const wrapper = shallow(<Routes location={data[0]}/>)
		assert(wrapper.find('.routes'))
	});
	it('renders a div with the route info', () => {
		const wrapper = shallow(<Routes location={data[0]}/>)
		assert(wrapper.find('div'))
	});
});
