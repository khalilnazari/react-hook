import React, { useState } from 'react'
import useConsole from '../hooks/useConsole'

const UseConsole = () => {
    // state
    const [input, setInput] = useState(); 

    // useConsole Hook
    useConsole(input); 

    // jsx
    return (
        <input type="text" onChange={e=>setInput(e.target.value)}/>
    )
}

export default UseConsole