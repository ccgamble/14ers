import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Weather from '../lib/components/Weather'
import mockMountain from './helpers/mockMountain'

const sinon = require('sinon')

describe('Weather', () => {

  it('can render', () => {
    const wrapper = shallow(<Weather weather={mockMountain.weather}/>)
  });
}
