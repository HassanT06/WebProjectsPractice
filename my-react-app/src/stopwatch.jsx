import React, { useState, useEffect, useRef } from 'react';
function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime();
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    })

    function start(){
        setIsRunning(true);
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setTime(0);
    }




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