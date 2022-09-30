import { useEffect, useState } from "react";

// Get data from LocalStorage
const getFromLocalStorage = (key, initialValue) => {
    // store
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    
    // if initial value is function
    if(initialValue instanceof Function) return initialValue(); 
    
    return initialValue; 
}

// main function
export default function useLocalStorage (key, initialValue) {
    // call getFromLocalStorage inside useState. 
    const [value, setValue] = useState(() => {
        return getFromLocalStorage(key, initialValue)
    }); 

    // Save to localStorage when component loaded. 
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    // Return values. 
    return [value, setValue];
}