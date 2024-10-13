import React, { useEffect } from 'react';
import Phaser from 'phaser';

// css imports
import '../css/cabin.css';
import space from '../assets/space.mp4'; 
import cabin from '../assets/cabin-new.png'; 
import bit from '../assets/8bit.png'; 
import bitty from '../assets/bitty.png';

function Cabin() {

    useEffect(() => {
        // Phaser Game Configuration
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth, // Full width
            height: window.innerHeight - 100, // Reduce height for the text area
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 }, // Gravity for the game (player will fall)
                    debug: false,
                },
            },
            scene: {
                preload: preload, // Load assets
                create: create, // Create objects
                update: update, // Handle updates (e.g., movement)
            },
        };

        const game = new Phaser.Game(config);

        let player;
        let cursors;

        function preload() {
            this.load.image('background', cabin);
            this.load.image('player', bit); 
        }

        function create() {
            const background = this.add.image(window.innerWidth / 2, (window.innerHeight - 100) / 2, 'background')
                .setDisplaySize(window.innerWidth, window.innerHeight - 100)
                .setOrigin(0.5, 0.5); 

            player = this.physics.add.sprite(100, window.innerHeight - 150, 'player').setScale(0.35); // Scale down the player

            player.setBounce(0.2); 
            player.setCollideWorldBounds(true); 

            // Create ground as a static object that does not fall
            const ground = this.add.rectangle(window.innerWidth / 2, window.innerHeight - 110, window.innerWidth, 20, 0x000000);
            this.physics.add.existing(ground, true); 
            this.physics.add.collider(player, ground);

            cursors = this.input.keyboard.createCursorKeys();
        }

        // Update function to handle movement
        function update() {
            if (cursors.left.isDown) {
                player.setVelocityX(-160); 
            } else if (cursors.right.isDown) {
                player.setVelocityX(160);
            } else {
                player.setVelocityX(0); 
            }

            if (cursors.up.isDown && player.body.touching.down) {
                player.setVelocityY(-330); 
            }
        }

        return () => {
            game.destroy(true);
        };
    }, []); 

    return (
        <>
        <title> 8BIT </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"></link>

        <div id="phaser-game" style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: 'calc(100vh - 100px)' }}></div>

        <div className="text-input-area" style={{ height: '100px', position: 'absolute', bottom: 0, width: '100vw', backgroundColor: '#333', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={bitty} className="bitty"/>
        </div>
        </>
    );
}

export default Cabin;
