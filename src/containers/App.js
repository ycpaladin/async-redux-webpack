import React, {Component} from 'react'
import Content from '../compoments/Content'
import Header from '../Compoments/Header'
import Footer from '../Compoments/Footer'
import {connect} from  'react-redux'
import * as ItemActions from  '../actions'
import { bindActionCreators } from 'redux'

class App extends Component {
    render() {
        const actions = this.props.actions;
        return (
            <div>
                <Header addItem={actions.addItem}/>
                <Content
                    items={this.props.items}
                    areAllComplete={this.props.areAllComplete}
                    deleteItem={actions.deleteItem}
                    updateItem={actions.updateItem}
                    changeEditState={actions.changeEditState}
                    changeCompletedState={actions.changeCompletedState}
                    setAllChecked={actions.setAllChecked}
                    allComplete={actions.allComplete}
                    />
                <Footer items={this.props.items} destroyCompleted={actions.destroyCompleted}/>
            </div>

        )
    }
}

function checkAllComplete(items) {
    var completedCount = items.count((item, index) => item.complete == true);
    return completedCount == items.size
}


export default connect(state => ({
    items: state.items,
    areAllComplete: checkAllComplete(state.items)  //state.items.allComplete
}), dispatch => ({
    actions: bindActionCreators(ItemActions, dispatch)
}))(App)

