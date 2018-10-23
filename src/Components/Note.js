import React from 'react'

// Functional Component

export default function Note(props) {
    //Because we are using a functional component here, we access our props by using props.PROP_NAME and not this.props.PROP_NAME
    return (
        // Since the there are two different props passed in; title and text, we access those off the props parameter
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}