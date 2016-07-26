import React, { Component } from 'react'
import {connect} from  'react-redux'
import { bindActionCreators } from 'redux'
import classNames  from 'classnames';
import ListItemEditInput from  './ListItemEditInput'

class ListItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        var currentItem = this.props.item;
        var nextItem = nextProps.item;
        return currentItem.text != nextItem.text ||
            currentItem.isEditing != nextItem.isEditing ||
            currentItem.complete != nextItem.complete
    }

    render() {
        var props = this.props;
        var item = props.item;
        var input;

        console.log(item.text);
        if (item.isEditing) {
            input =
                <ListItemEditInput
                    className="edit"
                    {...props}
                    complete={(e) => this.complete() }
                    />;
        }

        return (
            <li
                className={classNames({
                    'completed': item.complete,
                    'editing': item.isEditing
                }) }
                key={item.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={item.complete}
                        onChange={e => this._onToggleComplete(e) }
                        ref="checkbox"
                        />
                    <label onDoubleClick={(e) => this._onDoubleClick() }>
                        {item.text}
                    </label>
                    <button className="destroy" onClick={this.props.deleteItem.bind(this, this.props.index) } />
                </div>
                {input}
            </li>
        );
    }

    _onDoubleClick() {
        this.props.changeEditState(this.props.index, true);
    }

    _onToggleComplete(e) {
        var checkbox = this.refs.checkbox;
        this.props.changeCompletedState(this.props.index, checkbox.checked);
    }

    complete() {
        this.props.changeEditState(this.props.index, false);
    }
}




export default ListItem