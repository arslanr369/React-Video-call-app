import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const [input, setinput] = useState("");
    const Navigate = useNavigate();

    const submitHandler = () => {
        Navigate(`/room/${input}`);
    }

    return (
        <div>
            <h2> Video Call APP</h2>
            <div>
                <input value={input} onChange={(e)=> setinput(e.target.value)} type="text" placeholder="Enter your Name..."/>
                <button onClick={submitHandler}>join</button>
            </div>
        </div>
    )
}

export default Home