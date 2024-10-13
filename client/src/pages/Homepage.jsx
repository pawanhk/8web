import React, { useState } from 'react';  
import { useNavigate, Link } from 'react-router-dom'; 

// css imports
import '../css/home.css';
import spaceVideo from '../assets/space.mp4'; 
import spaceCraft from '../assets/spacecraft .png'; 

function App() {
    // base states 
    const [startClicked, setStartClicked] = useState(false);
    const navigate = useNavigate();

    // after clicking on the main button
    const startClick = () => {
        setStartClicked(true); 
        setTimeout(() => {
            navigate('/editor');
        }, 4000); 
    };

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"></link>

        <div className="background">
          <video autoPlay muted loop>
            <source src={spaceVideo} type="video/mp4" />
          </video>

          <div className={`overlay ${startClicked ? 'slide-out' : ''}`}>
            <h1> 8BIT ADVENTURES </h1>
            <p> chart your path with code </p> 

            <div className="select">
              <button onClick={startClick}> START </button><br/>

              <Link to="/editor">
                <button> CONTINUE </button><br />
              </Link>

              <p>made by pawan hk at HACK PSU 24</p>
            </div>
          </div>

          <img src={spaceCraft} className="spacecraft" alt="spacecraft" /> 
        </div>  
        </>
    );
}

export default App;
