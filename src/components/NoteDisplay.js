import React from "react";
import Showdown from 'showdown';
import './NoteDisplay.css'

const converter = new Showdown.Converter();
const NoteDisplay = (props) => {
  const createHtml = () => {
    return {__html: converter.makeHtml(props.markdown)};
  }
  return (
  <div className="note-display">
    <div dangerouslySetInnerHTML={createHtml()} />
  </div>
)}

export default NoteDisplay