import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleColorRed = () => {
        
        setColor("red");
    }

    const handleColorYellow = () => {
        
        setColor("yellow");
    }

    const handleOnChange = (event) => {
        
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    const [color, setColor] = useState("black");
  return (

    <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className = "form-control" id = "myBox" rows = "8" value={text} onChange={handleOnChange}
        style={{backgroundColor: props.mode === 'light' ? 'white': 'grey'}}
        ></textarea>
        </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upperCase</button>
        <button className='btn btn-warning mx-2' onClick={handleColorYellow}>Change to Yellow Color</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowerCase</button>
        <button className='btn btn-danger mx-2' onClick={handleColorRed}>Change to Red Color</button>
    </div>

    <div className="conatiner my-3" style= {{color : props.mode == 'dark' ? 'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p style ={{ color: color}} > {text}</p>
    </div>
    </>

  )
}
