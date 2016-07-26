import React, { Component } from 'react'


class ListItemEditInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.item.text};
    }
    render() {
        return (
            <input type="text"
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={(e) => this._save() }
                onChange={ e => this._handerChange(e) }
                onKeyDown={ e => this._handerKeyDown(e) }
                value={this.state.text}
                autoFocus={true}
                ref="input"
                />
        );
    }

    _save() {
        // var input = this.refs.input;
        this.props.updateItem(this.props.index, this.state.text);
        this.setState({text:''})
        this.props.complete();
    }

    _handerChange(e) {
        var input = this.refs.input;
        this.setState({text:input.value})
    }

    _handerKeyDown(e) {
        if (e.keyCode === 13) {
            this._save();
        }
    }
}

export default ListItemEditInput