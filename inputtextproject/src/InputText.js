import React from "react";
import { useState } from 'react';

const App = () => {

    const [status, setStatus] = useState(false);
    const [textvalue, setTextvalue] = useState('hi');
    const changeStat = () => {
        setStatus(!status);
    };

    return (
        <div>
            {!status ? <input
                type="text" id="message" value={textvalue}
                onChange={(event) => setTextvalue(event.target.value)} /> : <span > {textvalue}</span>}
            <button onClick={changeStat}>{status ? 'EnableEdit' : 'DisableEdit'}</button>
        </div>
    );
};

export default App;
