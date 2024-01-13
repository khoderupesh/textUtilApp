import React, {useState} from 'react'

export default function TextForms(props){
    const [text, setText] = useState('')
    const changeToUpperCase = () => setText(text.toUpperCase());
    const changeToLowerCase = () => setText(text.toLowerCase());
    const changeToPascalCase = () => setText(text.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()));
    const handleOnChange = (event) => {
        setText(event.target.value)
    };
    const clearTextArea = (event) => {
        setText(event.target.value = '')
    }
    const copyText = () => {
        let textContent = document.getElementById('textArea');
        textContent.select()
        navigator.clipboard.writeText(textContent.value);
    }
    const textWordLength = text.length !== 0 ? text.split(' ').length : 0
    return (
        <>
        <div className="container mb-3">
            <h1 className="my-3">{props.heading}</h1>
            <textarea className="form-control" row="5" placeholder="Type or paste your text here" id="textArea" value={text}
              onChange={handleOnChange}></textarea>
        </div>
        <div className="container">
            <button type="button" className="btn btn-success" onClick={changeToUpperCase}>To Uppercase</button>
            <button type="button" className="btn btn-success mx-1"  onClick={changeToLowerCase}>To Lowercase</button>
            <button type="button" className="btn btn-success mx-1"onClick={changeToPascalCase}>To Pascalcase</button>
            <button type="button" className="btn btn-success mx-1">To Camelcase</button>
            <button type="button" className="btn btn-success mx-1" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-success mx-1" onClick={clearTextArea}>Clear</button>
        </div>
        <div className="container my-3">
            <label htmlFor="">Number of Characters: {text.length} and Number of words:{textWordLength}</label>
        </div>
        </>
    )
}