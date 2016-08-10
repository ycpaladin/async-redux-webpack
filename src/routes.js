import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import AsyncApp from './containers/AsyncApp'

// export default (
//     <Route path='/' component={Layout} >
//         <IndexRoute component={PostList} />
//     </Route>
// )


export default class extends Component {
    render() {

        return (
            <Router history={this.props.history}>
                <Route path='/' component={Layout} >
                    <IndexRoute component={AsyncApp} />
                </Route>
            </Router>
        )
    }
}