import React from "react";
import { useState } from 'react';

const App = () => {

    const [status, setStatus] = useState(false);

    const changeStat = () => {
        setStatus(!status.isReadOnly);
        console.log('HI PEJMAN')
    };

    return (
        <div>
            <input
                type="text"
                id="message"
                name="message"
                disabled={status}
            />

            <button onClick={changeStat}>ChangeStatus</button>
        </div>
    );
};

export default App;
