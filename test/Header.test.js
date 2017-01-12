import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Header from '../lib/components/Header'

describe('Header', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Header />)
  })

  it('renders as a <header>', () => {
   const wrapper = shallow(<Header />)
   assert.equal(wrapper.type(), 'header')
 })

 it('should render a logo', () => {
	 const wrapper = shallow(<Header/>)
	 assert.equal(wrapper.find('.header-photo').length, 1)
 });
 it('should render a button for displaying favorites', () => {
	 const wrapper = shallow(<Header />)
	 assert.equal(wrapper.find('.favorites-link').length, 1)
 })
})
