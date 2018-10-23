import React, {Component} from 'react'

export default class NewNote extends Component {
    render() {
        let {addNewItem, inputTitle, inputText, updateTitle, updateText} = this.props;
        return (
            <div>
                Title: <input value={inputTitle} onChange={(e) => updateTitle(e.target.value)}/>
                Text: <input value={inputText} onChange={(e) => updateText(e.target.value)}/>
                <button onClick={addNewItem}>Add New Note</button>
            </div>
        )
    }
}