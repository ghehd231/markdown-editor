import React, { useState } from 'react';
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

const Markdown = () => {
  const [Value, setValue] = useState('')

  //바뀔때마다 상태 업데이트
  const handleChange =(value)=>{
    console.log(value)
    setValue(value);
    
  }

  //마우스가 MDEditor를 벗어나면 에디터 상태 저장!!
  const mouseLeave =() => {
    console.log('value 저장합니다!!')
    setValue(Value)
    console.log(Value)
  }

  //버튼 클릭하면 어따가 보내야 겠지??
  const handleSubmit=() => {
    console.log(Value)
    alert(Value)
  }
  
  return (
    <div style={{maxWidth: '1000px', display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
      <MDEditor
        height={500}
        value={""}
        previewOptions={{ renderers: renderers }}
        onChange={handleChange}
        onMouseLeave={mouseLeave}
      />
      <button onClick={handleSubmit}>전송!!</button>
    </div>
  );
};

export default Markdown;