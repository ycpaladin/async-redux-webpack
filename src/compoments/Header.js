import React, {Component} from 'react'


class AddItem extends Component {
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <AddItemInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    addItem={this.props.addItem}
                    allCompleted={this.props.allCompleted}
                    />
            </header>
        );
    }
}


class AddItemInput extends Component {

    render() {

        return (
            <input type="text"
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onKeyDown={(e)=>this._onKeyDown(e)}
                autoFocus={true}
                ref="input"
                />
        )
    }

    _onKeyDown(event) {
        if (event.keyCode === 13) {
            var input = this.refs.input;
            this.props.addItem(input.value)
            input.value = '';
        }
    }
}

// AddItem.propTypes = {
//     addItem: 
// }

export default AddItem