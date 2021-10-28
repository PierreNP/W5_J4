import React from "react";
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const Note = (props) => {
  const createHtml = () => {
    if(props.clickedItem.length === 0 ){
    return {__html: converter.makeHtml(props.item)}
    }else{
      return {__html: converter.makeHtml(props.clickedItem[1])}
    }
  }
  return(
    <div onClick={()=>props.onClick(props.item)} dangerouslySetInnerHTML={createHtml()} />
  )
}
export default Note