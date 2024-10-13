import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// page links with router 
import HomePage from './pages/Homepage'; 
import EditorPage from './pages/CodeEditor'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* homepage route */}
        <Route path="/" element={<HomePage />} />

        {/* editor route */}
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
