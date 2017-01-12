import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Weather from '../lib/components/Weather'
import mockWeather from './helpers/mockWeather'

describe('Weather', () => {
	it.skip('renders as a <section>', () => {
		const wrapper = shallow(<Weather weather={mockWeather} item={mockWeather[0]}/>)
		assert.equal(wrapper.type(), 'section')
	});

});
