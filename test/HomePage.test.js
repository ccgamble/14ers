import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import HomePage from '../lib/components/HomePage'
import SignIn from '../lib/components/SignIn'
import data from '../lib/data'

describe ('HomePage', () => {
	it('can mount with no properties', () => {
		const wrapper = shallow(<HomePage data={data}/>)
	});
	it('has constructor that sets state of selectedData to an empty array', function() {
		const wrapper = shallow(<HomePage data={data}/>);
		expect(wrapper.state('selectedData')).deep.equal([]);
	});
	it('has constructor that sets state of searchString to an empty string', function() {
		const wrapper = shallow(<HomePage data={data}/>);
		expect(wrapper.state('searchString')).deep.equal('');
	});
	it('renders a message to signIn', () => {
		const wrapper = mount(<HomePage data={data} />);
		assert.equal(wrapper.find("#not-signed-in").length, 1)
	})
	it.skip('renders the list of mountains once the user signs in', () => {
		const wrapper = mount(<SignIn />);
		wrapper.find('.logIn-btn').simulate('click')
		const wrapper2 = mount(<HomePage data={data} />)
		assert.equal(wrapper2.find(".li-info").length, 53)
	})
});
