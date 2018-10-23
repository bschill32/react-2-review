import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components 
import Note from './Components/Note'
import NewNote from './Components/NewNote'

class App extends Component {
  constructor() {
    super()
    this.state = {
      noteList: [
        {
          title: 'Which starter is best?',
          text: 'Charmander of course'
        },
        {
          title: 'Would I rather be feared or loved?',
          text: 'Easy. Both. I want people to be afraid of how much they love me.'
        },
        {
          title: 'Hello',
          text: 'World'
        }
      ],
      inputTitle: '',
      inputText: ''
    }
    this.addNewItem = this.addNewItem.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  addNewItem() {
    let noteListCopy = this.state.noteList.slice()
    let newNote = {
      title: this.state.inputTitle,
      text: this.state.inputText
    }
    noteListCopy.push(newNote)
    this.setState({
      noteList: noteListCopy,
      inputTitle: '',
      inputText: ''
    })
  }

  updateTitle(value) {
    this.setState({
        inputTitle: value
    })
  }

  updateText(value) {
      this.setState({
          inputText: value
      })
  }

  render() {
    let {noteList, inputTitle, inputText} = this.state
    return (
      <div className="App">
       {
         noteList.map( (note, i) => {
          return (
            <Note 
            title={note.title}
            text={note.text}
            key={i}
            ></Note>
          )
         })
       }
       <NewNote
       inputTitle={inputTitle}
       inputText={inputText}
       updateTitle={this.updateTitle}
       updateText={this.updateText}
       addNewItem={this.addNewItem}></NewNote>
      </div>
    );
  }
}

export default App;
