import React, {Component} from 'react'

export default class extends Component {

    render() {
        var total = this.props.items.size;
        var completed = this.props.items.count(item => item.complete == true);

        // var completed = r.size;
        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={ e => this._onClearCompletedClick(e) }>
                    Clear completed ({completed})
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {itemsLeft}
                    </strong>
                    {itemsLeftPhrase}
                </span>
                {clearCompletedButton}
            </footer>
        );
    }

    _onClearCompletedClick(e) {
        var indexAsArray = [];
        for (var i = 0, item; item = this.props.items.get(i); i++) {
            if (item.complete)
                indexAsArray.push(i);
        }
        this.props.destroyCompleted(indexAsArray);
    }

}