import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './Components/CounterApp';

import './style.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp />, divRoot);