import React, { useState, useEffect } from 'react';
function Clock(){

    const [time, setTime] = useState(new Date()); //set time state + assign date object

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);  //useEffect to update time every 1000 milliseconds
    //function formatTime(time){
        //let hours = time.getHours()
       // let minutes = time.getMinutes()
        //let seconds = time.getSeconds()
       // let meriduim = hours >= 12 ? 'PM' : 'AM'
    //}
    function padZero(num){
        return num < 10 ? `0${num}` : num;
    } //function to add leading zero to single digit numbers
    //function to format time(which contains the date object) in 12 hour format
    const formattedTime = `${padZero(time.getHours())}:${padZero(time.getMinutes())}:${padZero(time.getSeconds())} ${time.getHours() >= 12 ? 'PM' : 'AM'}`;
    return(
        <>
        <div classname="clock-container">
            <div className="clock">
                <span className="clock-text">{formattedTime}</span>
            </div>
        </div>
        </>
    )
}
export default Clock;