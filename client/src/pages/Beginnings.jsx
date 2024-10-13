import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom'; 

// css imports
import '../css/beginnings.css';  
import spaceVideo from '../assets/space.mp4'; 
import spacecraft from '../assets/spacecraft .png'; 

function Beginnings(){
    const [startAnimation, setStartAnimation] = useState(false); 
    const [fadeOut, setFadeOut] = useState(false); 
    const navigate = useNavigate();

    // set the animation to move from the left to the center, get bigger as it goes 
    useEffect(() => {
        // wait for 3secs first for the hard page reload
        const animationTimer = setTimeout(() => {
            setStartAnimation(true); 
        }, 3000);

        // slow out on fade
        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, 7500); 
        const navigateTimer = setTimeout(() => {
            navigate('/cabin'); 
        }, 10000); 

        return() => {
            clearTimeout(animationTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"></link>

        <div className={`beginnings-page ${fadeOut ? 'fade-out' : ''}`}> 
          <div className="background">
            <video autoPlay muted loop>
              <source src={spaceVideo} type="video/mp4" />
            </video>

            <img src={spacecraft}  className={`spacecraft ${startAnimation ? 'animate-spacecraft' : ''}`} />
          </div>  
        </div>
        </>
    );
}

export default Beginnings;
