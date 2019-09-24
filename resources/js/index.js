import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Admins/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';





if (document.getElementById('root')) {
    ReactDOM.render(<Router>< Navbar /> </Router>, document.getElementById('root'));
}
