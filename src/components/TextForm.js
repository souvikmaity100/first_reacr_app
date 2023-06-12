import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handelOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }
    const UpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
  return (
        <div className="mb-3 container my-2">
            <h2>{props.heading}</h2>
            <textarea rows="10" value={text} onChange={handelOnChange} className="form-control my-2"></textarea>
            <button className="btn btn-primary" onClick={UpClick}>Convert to Uppercase</button>
        </div>
  )
}
