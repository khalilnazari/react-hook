import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const UseLocalStorage = () => {
    // const [input, setInput] = useState('') 
    const [input, setInput] = useLocalStorage('use-local-stoage', '')
    return (
        <div>
            <input type="text" onChange={e => setInput(e.target.value)} placeholder="Enter your name..." value={input}/>
            <p>You entered: {input}</p>
        </div>
    )
}

export default UseLocalStorage