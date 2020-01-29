import {helloWorld} from '../hello-world';
import React from 'react';
import ReactDOM from 'react-dom';
// import { common } from '../../common/index';

class Index extends React.Component {
    render() {
        return <div>Index Page....{common()}</div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);