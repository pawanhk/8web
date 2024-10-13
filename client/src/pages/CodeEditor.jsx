import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useState } from "react";
import axios from "axios";
import '../css/index.css';

function App() {
  const [code, setCode] = useState("a = 0");
  const [testCases, setTestCases] = useState([]);
  const [error, setError] = useState(null);

  const submitCode = () => {
    axios
      .post("http://localhost:80/python", { code })
      .then(({data}) => {
        console.log('Response from server:', data);
        setTestCases([data.codeOutput]);
        setError(null);
      })
      .catch((err) => {
        console.error(err.response.data.error); 
        setError(err.response.data.error); 
      });
  };
// return code mirror output this is the main textbox 
  return (
    <>
    <div> Write a function to add two numbers: </div>
    {testCases.map((testCase, i) => (
      <div key={i}>
        <div> Results: {testCase}</div>
      </div>
    ))} 

    {/* Show the error if it exists */}
    {error && (
      <div style={{ color: 'red', marginTop: '10px' }}>
        <strong>Syntax Error:</strong> {error}
      </div>
    )}

      <CodeMirror
        value={code}  
        height="500px"
        theme={dracula}  
        extensions={[javascript()]}  
        onChange={(value, viewUpdate) => {  
          setCode(value);
        }}
      />
      <button className="border-2 bg-green-500" onClick={submitCode}> Submit Code </button> 
    </>
  );
}

export default App;
