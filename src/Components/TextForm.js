import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let upper = text.toUpperCase();
        setText(upper);
    }
    const handleLowClick = () =>{
        let lower = text.toLowerCase();
        setText(lower);
    }
    const handleOnChange = (event) => {
        // console.log("Handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = 'asdfa'; // wrong way to change the state
    // setText("New Text");  // correct way to change the text
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className='my-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>

    )
}
