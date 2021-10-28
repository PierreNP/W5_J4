import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  return(
    <div>
      {Array.from(localStorage).map((item, index) => <Note onClick={props.onClick} item={item} />
      )}
    </div>
  )
}
export default NotesList