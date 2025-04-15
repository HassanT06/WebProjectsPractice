import React, { useState, useEffect, useRef } from 'react';
function Stopwatch(){

    return(
        <>
            <div className='stopwatch-container'>
                <h1>Stopwatch</h1>
                <div className='stopwatch'>
                    <div className='stopwatch-display'>
                        <span>00:00:00</span>
                    </div>
                    <div className='stopwatch-controls'>
                        <button className='start'>Start</button>
                        <button className='stop'>Stop</button>
                        <button className='reset'>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stopwatch;