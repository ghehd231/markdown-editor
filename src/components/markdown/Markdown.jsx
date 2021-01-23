import React from 'react';
import MDEditor from '@uiw/react-md-editor'


const renderers = {
  code: ({ children, language, value }) => {
    if (language.toLocaleLowerCase() === "mermaid") {
      const Elm = document.createElement("div");
      Elm.id = "demo";
      
      return (
        <pre>
          <code dangerouslySetInnerHTML={{}} />
        </pre>
      );
    }
    return children;
  }
};

const handleChange =(value)=>{
  console.log(value)
}
const Markdown = () => {
  
  return (
    <div style={{maxWidth: '1000px', display: 'flex', justifyContent:'center'}}>
      <MDEditor
        height={500}
        value={""}
        previewOptions={{ renderers: renderers }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Markdown;