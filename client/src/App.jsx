import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useState } from "react";

function App() {
  const [code, setCode] = useState("a = 0");

  const submitCode = () => {
    console.log(code);
  }

  return (
    <>
    <CodeMirror
      value={code}  // Pass the state value here
      height="500px"
      theme={dracula}  // Properly set the theme
      extensions={[javascript()]}  // Use the extensions directly
      onChange={(value, viewUpdate) => {  // onChange provides the new value directly
        setCode(value);
      }}
    />
    <div className="border-2 bg-green-500" onClick={submitCode}> Submit Code </div> 
    
    </>
  );
}

export default App;
