import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = () =>{
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleBoldClick = () =>{
        let bold = text;
        let boldTag = document.createElement("b");
        boldTag.innerHTML = bold;
        document.querySelector(".preview").innerHTML = '';
        document.querySelector(".preview").appendChild(boldTag);
    }
    const handleUnderlineClick = () =>{
        let underlineTxt = text;
        let underlineTag = document.createElement("u");
        underlineTag.innerHTML = underlineTxt;
        document.querySelector(".preview").innerHTML = '';
        document.querySelector(".preview").appendChild(underlineTag);
    }
    const handleRmSpaceClick = () =>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    }
    const handleCopyClick = () =>{
        let copyText = document.querySelector("textarea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied message: "+copyText.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleClearClick = () => {
        let clear = "";
        setText(clear);
        props.showAlert("Text cleared", "success");
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
        <div className="container" style={{color : props.mode === 'dark'? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className='my-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? 'grey' : 'white', color : props.mode === 'dark'? 'white' : '#042743'}} placeholder="Leave a comment here" id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleBoldClick} >Convert to bold</button>
            <button className="btn btn-primary mx-2" onClick={handleUnderlineClick} >Underline</button>
            <button className="btn btn-primary mx-2" onClick={handleRmSpaceClick} >Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear all</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p className="preview">{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
