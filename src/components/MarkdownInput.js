import React from "react";

const MarkdownInput = (props) => {
  console.log(props)
  console.log(props.markdown, "test dans markdown Input composant")
  return (
    <div>
    <textarea value={props.markdownInput} onChange={(e) => props.onChange(e.target.value)}/>
    <button onClick={() => props.saveMarkdown()}>Enregistrer</button>
    <button onClick={() => props.updateMarkdown(props.markdown)}>Modifier</button>
  </div>
)}

export default MarkdownInput