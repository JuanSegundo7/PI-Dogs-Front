import React from 'react';
import "./Spinner.css"

const Spinner = () => {
    return (
        <div className="metronome">
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
        </div>
    );
}

export default Spinner;
