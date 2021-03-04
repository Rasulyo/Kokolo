import React from 'react';
import hero_video from '../../assets/video/hero_video.mp4'
import './Hero.css';

export default function Hero() {
    return (
        <div>
            
            <video className="hero_video"
                autoPlay
                loop
                muted
            >
                <source
                    src={hero_video}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}