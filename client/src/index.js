import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// page links with router 
import HomePage from './pages/Homepage'; 
import EditorPage from './pages/CodeEditor'; 
import Beginnings from './pages/Beginnings'; 
import Cabin from './pages/Cabin'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/beginnings" element={<Beginnings />} /> 
        <Route path="/cabin" element={<Cabin />} /> 
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
