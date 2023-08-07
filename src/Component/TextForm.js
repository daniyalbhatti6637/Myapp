import React, {useState} from 'react'

function TextForm(props) {

    const handleupClick =( ) =>{
        // console.log("upper case was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleloClick =( ) =>{
        // console.log("upper case was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
       props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick =( ) =>{
        // console.log("upper case was clicked" + text);
        let newtext = "";
        setText(newtext)
        props.showAlert("Text cleared!", "success");
    }
    const handelonchange =( event) =>{
        // console.log("on change")
        setText(event.target.value);
    }
 const [text, setText] = useState ('');
 const handelCopy = () => {
    
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
 }

  return (
<>
    
       <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
        <div class="mb-3">
        <textarea class="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white',
    color: props.mode==='dark'?'white':'black'}} onChange={handelonchange} id="mybox" rows="6"></textarea>
        </div>
        <button className='btn btn-outline-success mx-2'onClick={handleupClick}>Contvet to Uppercase</button>
        <button className='btn btn-outline-primary mx-2'onClick={handleloClick}>Contvet to lowercase</button>
        <button className='btn btn-outline-danger mx-2'onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-outline-warning mx-2'onClick={handelCopy}>Copy Text</button>
       
    </div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
<h3>You text summary</h3>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} minutes Read</p>
<h3>preview</h3>
<p>{text}</p>

</div> 
</>
  )
}

export default TextForm
