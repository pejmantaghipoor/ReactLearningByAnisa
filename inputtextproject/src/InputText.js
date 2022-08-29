import React from "react";
import { useState } from 'react';

const App = () => {

    const [status, setStatus] = useState(false);
    const [textvalue, setTextvalue] = useState('');
    const changeStat = () => {
        setStatus(!status);
    };

const changValue=(event)=>{
setTextvalue(event.target.value)
}

    return (
        <div>
            {!status ? <input
                type="text" id="message" value={textvalue}
                onChange={changValue} /> : <span > {textvalue}</span>}
            <button onClick={changeStat}>{status ? 'EnableEdit' : 'DisableEdit'}</button>
        </div>
    );
}; 
export default App;
