import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let upper = text.toUpperCase();
        setText(upper);
    }
    const handleOnChange = (event) =>{
        // console.log("Handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here 😎');
    // text = 'asdfa'; // wrong way to change the state
    // setText("New Text");  // correct way to change the text
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className='my-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
    )
}
