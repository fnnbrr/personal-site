import React from 'react';
import './Games.css';

export default function DistortionCamera() {
    return (
        <div className={"Game"}>
            <iframe
                className="ItchEmbed"
                title="distortion camera"
                src="https://distortion-camera.pages.dev/"
                allow="fullscreen; camera; autoplay">
            </iframe>
        </div>
    );
}