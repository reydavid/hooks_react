import React, { useState } from 'react';


function Backstock(){

    const [count, setCount] = useState(0)
    const [icount, setiCount] = useState(2)
    
    return (

        <div className="box">
            <h3>Backstock:{count}</h3>
            <div className="bin">
                <button onClick = {()=> setCount(count+icount)}>+</button>
                <button onClick = {()=> setCount(count-icount)}>-</button>
                <button onClick = {()=> setCount(0)}>reset</button>
            </div>
            <h3>Increment:{icount}</h3>
            <div className="bin">
                <button onClick = {()=> setiCount(icount+1)}>+</button>
                <button onClick = {()=> setiCount(icount-1)}>-</button>
                <button onClick = {()=> setiCount(2)}>reset</button>
            </div>
        </div>
    )
}

export default Backstock;
