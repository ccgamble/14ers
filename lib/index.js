const React = require('react');
import { render } from 'react-dom';
const ReactDOM = require('react-dom');
require('./styles/styles.scss')


import Application from './components/Application';

render(<Application />, document.querySelector('.application'));
