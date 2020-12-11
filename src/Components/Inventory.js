import React, { useState, useEffect } from 'react';
import './Inventory.css'


function Inventory(){

    const [count, setCount] = useState(0)
    const [icount, setiCount] = useState(1)

    useEffect(() => {
        console.log("Component did mount");
    })

    return (

        <div className="box">
            <h3>Inventory:{count}</h3>
            <div className="bin">
                <button onClick = {()=> setCount(count+icount)}>+</button>
                <button onClick = {()=> setCount(count-icount)}>-</button>
                <button onClick = {()=> setCount(0)}>reset</button>
            </div>
            <h3>Increment:{icount}</h3>
            <div className="bin">
                <button onClick = {()=> setiCount(icount+1)}>+</button>
                <button onClick = {()=> setiCount(icount-1)}>-</button>
                <button onClick = {()=> setiCount(1)}>reset</button>
            </div>
        </div>
    )
}

export default Inventory;
