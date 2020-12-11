import React, { useState } from 'react';


function Backordered(){

    const [count, setCount] = useState(0)
    const [icount, setiCount] = useState(3)
    
    return (

        <div className="box">
            <h3>Backordered:{count}</h3>
            <div className="bin">
                <button onClick = {()=> setCount(count+icount)}>+</button>
                <button onClick = {()=> setCount(count-icount)}>-</button>
                <button onClick = {()=> setCount(0)}>reset</button>
            </div>
            <h3>Increment:{icount}</h3>
            <div className="bin">
                <button onClick = {()=> setiCount(icount+1)}>+</button>
                <button onClick = {()=> setiCount(icount-1)}>-</button>
                <button onClick = {()=> setiCount(3)}>reset</button>
            </div>
        </div>
    )
}

export default Backordered;
