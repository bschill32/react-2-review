import React, {Component} from 'react'

export default class NewNote extends Component {
    render() {
        // We are in a class here, so we need to access our props off this.props. I don't feel like typing out this.props.PROP_NAME every time I need to access a value in the render fucntion, so I use object destructuring to pull them off onto variables for less typing later
        let {addNewItem, inputTitle, inputText, updateTitle, updateText} = this.props;
        return (
            <div>
                {/* Both Title and text get their value from the parents state. Their handle change functions are passed down from the parent and we invoke them here. just like any other handle change, it takes an events.target.value and uses that to update parent state. */}
                Title: <input value={inputTitle} onChange={(e) => updateTitle(e.target.value)}/>
                Text: <input value={inputText} onChange={(e) => updateText(e.target.value)}/>
                {/* Finally when we are ready to add a new item, we can invoke addNewItem which is passed down from the parent */}
                <button onClick={addNewItem}>Add New Note</button>
            </div>
        )
    }
}