'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import './search.less';
import logo from '../images/Logo.png';
import largeNumber from 'large-number-xiaod';
// import { common } from '../../common/index';
class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        };
    }
    loadComponent() {debugger
        import(/* webpackChunkName: "text"  */ './text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }
    render() {
        const { Text } = this.state;

        return <div className="search-text">
            Search Page contents..
            {
                Text ? <Text /> : null
            }
            <img src={logo} onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('root')
)