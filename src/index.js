import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NotesList from './components/NotesList';

const App = () => {
  const [markdown, setMarkdown] = useState("")
  const [markdownInput, setMarkdownInput] = useState("")

  const [clickedItem, setClickedItem] = useState([])
  const [keyNotes, setKeyNotes] = useState(Object.keys(localStorage).length)
  
  const viewInput = (input) => {
    setMarkdownInput(input)
  }

  const saveMarkdown = () => {
    setMarkdown(markdownInput)
    localStorage.setItem(`${keyNotes}`, markdown)
    setKeyNotes(Object.keys(localStorage).length)
    console.log(localStorage)
  }

  const onClickOneNoteHandler = (arg) => {
    
    console.log("index.js")
    setMarkdown(arg)
    setMarkdownInput(arg)
    
  }
  const updateMarkdown = (test) => {
    localStorage.setItem(Array.from(localStorage).findIndex(item => item === markdown), markdownInput)
    setClickedItem([Array.from(localStorage).findIndex(item => item === markdown), markdownInput])
  }

  return(
  <div className="container">
    <NotesList onClick={(arg)=> onClickOneNoteHandler(arg)} clickedItem={clickedItem} />
    <NoteDisplay markdown={markdownInput}/>
    <MarkdownInput markdown={markdown} markdownInput={markdownInput} onChange={viewInput} saveMarkdown={saveMarkdown} updateMarkdown={(arg)=>updateMarkdown(arg)}/>
  </div>
)};

ReactDOM.render(<App />, document.getElementById('root'));