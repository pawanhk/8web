import React, { useState, useEffect } from 'react';  
import { useNavigate, Link } from 'react-router-dom'; 

// css imports
import '../css/home.css';
import spaceVideo from '../assets/space.mp4'; 
import spacecraft from '../assets/spacecraft .png'; 


function Home() {
    const [startClicked, setStartClicked] = useState(false);
    const [newClicked, setNewClicked] = useState(false);
    const navigate = useNavigate();
    

    // after clicking on the main button
    const startClick = () => {
        setStartClicked(true); 
        setTimeout(() => {
            navigate('/beginnings');
        }, 3000); 
    };

    const newClick = () => {
      setNewClicked(true); 
      setTimeout(() => {
          navigate('/editor');
      }, 0); 
  };

    return (
        <>
        <title> 8BIT </title>
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

                <button onClick={newClick}> Editor </button><br />

              <p>made by pawan hk at HACK PSU 24</p>
            </div>
          </div>

          <img src={spacecraft} className="spacecraft"/>
        </div>  
        </>
    );
}

export default Home;
