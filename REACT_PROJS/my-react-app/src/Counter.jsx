import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);


    return(
        <div className="counter">
            <h1 className="count">{count}</h1>
            <button onClick={decrement} className="decbtn">-</button>
            <button onClick={reset} className="resbtn">Reset</button>
            <button onClick={increment}className="incbtn">+</button>
        </div>
    );
}

export default Counter