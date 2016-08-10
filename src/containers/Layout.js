

import React, {Component} from 'react';
import { connect } from 'react-redux';

// @connect(state => ({ routerState: state.router}))
export const Layout = class Layout extends Component {

    render() {
        console.log('layout.')
        return (
            <section id="todoapp">
                {this.props.children}
            </section>
        );
    }
}



export default Layout ;