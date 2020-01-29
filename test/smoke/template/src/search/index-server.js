'use strict'
// import React from 'react';
// import ReactDom from 'react-dom';
// import './search.less';
// import logo from '../images/Logo.png';
// import largeNumber from 'large-number-xiaod';
// import { common } from '../../common/index';


const React = require('react');
const logo = require('../images/Logo.png').default;

require('./search.less');


class Search extends React.Component {
    constructor() {
        super(...arguments);
    }
    loadComponent() {
        debugger;
    }
    render() {
        return <div className="search-text">
            Search Page contents..
            <img src={logo} onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}

module.exports = <Search/>;