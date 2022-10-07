/**
 * This is a custom React.JS hook
 * It validates form feilds 
 * useReducer hook is used for simplicity  
 */


import { useEffect, useReducer, useState } from "react";

const initialState = {}; 

// Reducer function accept state and action. 
const reducer = (state, action) => {
    const actionType = action.type; 
    const actionPayload = action.payload;

    switch (actionType) {
        case "fullname":
            if(actionPayload === "") {
                state.fullnameError = "This field is required";  
            } else {
                state.fullnameError = null; 
            }
            return {...state, [actionType]: actionPayload}
        
        case "email":
            if(actionPayload === "") {
                state.emailError = "This field is required";  
            } else if(emailValidate(actionPayload)) {
                state.emailError = "Please enter a valid email" 
            } else {
                state.emailError = null;  
            }
            return {...state, [actionType]: actionPayload}

        case "password": 
            if(actionPayload === "") {
                state.passwordError = "This field is required" 
            } else if (actionPayload.length < 5) {
                state.passwordError = "Password should be more than 5 characters" 
            } else if (validatePassword(actionPayload)) {
                state.passwordError = "Password should contain at least 1 digit and 1 letter" 
            } else {
                state.passwordError = null;  
            }
            return {...state, [actionType]: actionPayload}

        case "confirmPassword": 
            if(actionPayload === "") {
                state.confirmPasswordError = "This field is required" 
            } else if (actionPayload !== state.password) {
                state.confirmPasswordError = "Password does not match!" 
            } else {
                state.confirmPasswordError = null;  
            }
            return {...state, [actionType]: actionPayload}

        default:
            return {...state}
    }
} 


// main hook function
export function useFormValidate() {
    // state
    const [value, setValue] = useState({}); 
    const [state, dispatch] = useReducer(reducer, initialState); 

    // dispatch value only after DOMMounted
    useEffect(() => {
        dispatch(value)
    }, [value])

    return [state, setValue] 
}



// Check email validity 
function emailValidate(inputEmail) {
    const result = inputEmail.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    if(result) {
        return false; 
    } else {
        return true;
    }
}

// Check password validity 
function validatePassword(inputtxt) { 
    const result = inputtxt.match(/^(?=.*\d)(?=.*[a-z]).{6,20}$/);
    if(result) {
        return false;
    } else {
        return true; 
    }
}
