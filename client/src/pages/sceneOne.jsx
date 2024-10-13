import React, { useState } from 'react';  
import { useNavigate, Link } from 'react-router-dom'; 

// css imports
import '../css/home.css';
import spaceVideo from '../assets/space.mp4'; 

function App() {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"></link>

        <div className="background">
          <video autoPlay muted loop>
            <source src={spaceVideo} type="video/mp4" />
          </video>

        </div>  
        </>
    );
}

export default App;
