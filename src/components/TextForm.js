import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handelOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }

    const UpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const LoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const ClearClick = ()=>{
        let newText = "";
        setText(newText);
    }

    const copyText = ()=>{
        let myText = document.getElementById('myText');
        myText.select();
        navigator.clipboard.writeText(myText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Your text copped", "success");
    }

    const extraSpacess = ()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "info");
    }

    
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="mb-3 col my-2">
                    <h2>{props.heading}</h2>
                    <textarea id='myText' rows="10" value={text} onChange={handelOnChange} className="form-control my-2" placeholder='Enter text here' style={{background: props.mode === 'light'? 'white':'#282A3A', color: props.mode === 'light'? 'black':'white'}}></textarea>
                    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={UpClick}>Convert to Uppercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={LoClick}>Convert to Lowercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={ClearClick}>Clear text</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text to clipbord</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={extraSpacess}>Remove extra spacess</button>
                </div>
                <div className="mb-3 col my-2">
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.split(/[ ]+/).join(' ').length} characters</p>
                    <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!=0}).length)} Minuts to read</p>
                    <h3>Preview</h3>
                    <pre>{text.length>0?text:"Enter something in the textbox to preview it here"}</pre>
                </div>
            </div>
        </div>
    </>
  )
}
