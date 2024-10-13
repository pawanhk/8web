// require the filesystem
const fs = require("fs");
const cors = require("cors");
const express = require('express');
const { join } = require("path");
const PythonShell = require('python-shell').PythonShell;

const app = express(); 
const port = 80;

app.use(cors());
app.use(express.json());

app.post("/python", (req, res) => {
  const userCode = req.body.code;
  // add the command line arguments and sys call here
  const addCode = 
`
import sys;

if __name__ == "__main__":
    a = int(sys.argv[1])
    b = int(sys.argv[2])
    result = int(sys.argv[3])
    print(add(a, b) == result)

`
  // now just combine both documents 
  const joinCode = userCode + "\n\n" + addCode;

  // write to the file
  fs.writeFileSync("test.py", joinCode);

  let options = {
    mode: 'text',
    // use python3 for sure cause python is broken in my system 
    pythonPath: 'python3', 
    pythonOptions: ['-u'], 
    args: [1, 2, 3] 
  };

  // run the python shell now on test.py
  PythonShell.run('test.py', options).then(messages => { 
    console.log('results:', messages); 
    res.json({ codeOutput : messages[0]});
    }).catch((err) => {
      // catch errors 
      console.error("Python error:", err.message); 
      // slice the error message to remove the first part of the syntax error 
      const errorLines = err.message.split("\n").slice(1).join("\n"); 
      res.status(400).json({ message: "Error running Python script", error: errorLines });
    });
});

app.listen(port, () => {
  // boilerplate
  console.log(`Example app listening on port ${port}`);
});
