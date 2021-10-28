import React from "react";
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const Note = (props) => {
  const createHtml = () => {
    return {__html: converter.makeHtml(props.item)}
  }
  return(
    <div onClick={()=>props.onClick(props.item)} dangerouslySetInnerHTML={createHtml()} />
  )
}
export default Note