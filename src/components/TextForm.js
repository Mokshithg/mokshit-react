import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const onchange = (moksh) => {
        setText(moksh.target.value);
    }
    const handleLowerclick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClear = () => {
        setText(' ');
    }
    const [text, setText] = useState("");
  return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='something'>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='"form-control' onChange={onchange} style={{backgroundColor:props.mode==='dark'?'white':'#343a40',color:props.mode === 'dark'?'black':'white'}} value={text} id='myBox' rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>UpperCase Conversion</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowerclick}>LowerCase Conversion</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Text Copy</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
     </div>
        <div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Description</h1>
            <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} Words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length}time</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:<imp>Enter something to preview your text</imp>}</p>
        </div>    
    </>
  )
}
