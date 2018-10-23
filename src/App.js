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
    // Remember to bind methods in the constructor, especially if you will be passing them down to children. Get in the habit of binding
    this.addNewItem = this.addNewItem.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateText = this.updateText.bind(this)
  }
  // addNewItem is essentially doing the same thing we did yesterday with creating a new note but since each note is an object, we have to create a new note object that will be pushed into the noteListCopy 
  addNewItem() {
    let noteListCopy = this.state.noteList.slice()
    let newNote = {
      title: this.state.inputTitle,
      text: this.state.inputText
    }
    noteListCopy.push(newNote)
    // For user experience, we set inputTitle and inputText back to empty strings so that when the user clicks the button to add a new item they don't have to manually delete the characters in those inputs
    this.setState({
      noteList: noteListCopy,
      inputTitle: '',
      inputText: ''
    })
  }
  // updateTitle and updateText are both handling updating state each time an input is changed. The value parameter in both functions is the e.target.value. Since we are simply passing a string value on e.target.value, these functions can take that standalone string and use it to update state.
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
    // Object destructring. this.state is an object. I don't want to have to type out this.state.KEY each time that I want to reference a value in state so I'll use object destructuring here to pull these values off onto variables for less typing in the render method
    let {noteList, inputTitle, inputText} = this.state
    return (
      <div className="App">
      {/* Since we have an array of objects representing notes on our state, we can map through it returning a Note for each object in the array. We pass the objects title and text values as props and the Note component renders it out correctly.*/}
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
       {/* All of this functionality could have been kept up in the parent, but to show how props is working by passig functions and values I broke it out into a child components */}
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
