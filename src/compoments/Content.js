import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import ListItem from './ListItem'
class Content extends Component {

    render() {
        let Items = this.props.items.toArray().map((item, index) =>
            <ListItem
                item={item}
                key={index}
                index={index}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
                changeEditState={this.props.changeEditState}
                changeCompletedState={this.props.changeCompletedState}
                allComplete={this.props.allComplete}
                />);
        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={e => this._onToggleCompleteAll(e) }
                    checked={this.props.areAllComplete ? 'checked' : ''}
                    ref="checkbox"
                    />
                <ul id="todo-list">
                    {Items}
                </ul>
            </section>
        )
    }

    _onToggleCompleteAll(e) {
        var checkbox = findDOMNode(this.refs.checkbox);
        console.log(checkbox.checked)
        this.props.setAllChecked(checkbox.checked)
    }

}


export default Content