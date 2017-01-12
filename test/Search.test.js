import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Search from '../lib/components/Search'
import HomePage from '../lib/components/HomePage'
import data from '../lib/data'

describe ('Search', () => {
	it('can mount with no properties', () => {
		const wrapper = shallow(<Search />)
	});
	it('renders a div with the search bar', () => {
		const wrapper = shallow(<Search/>)
		assert(wrapper.find('.search-bar'))
	});
	it.skip('should allow search of contact cards', () => {
		const wrapper = mount(<Search />);
		const wrapper2 = mount(<HomePage data={data}/>)
		const search = wrapper.find('#search-input');
		search.simulate('change', { target: { name: 'Mount Elbert' } });
		assert.strictEqual(wrapper2.find('.mountain-listitem').length, 1);
	});
});
