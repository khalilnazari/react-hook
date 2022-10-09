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
export function emailValidate(inputEmail) {
    const result = inputEmail.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    if(result) {
        return false; 
    } else {
        return true;
    }
}

// Check password validity 
export function validatePassword(inputtxt) { 
    const result = inputtxt.match(/^(?=.*\d)(?=.*[a-z]).{6,20}$/);
    if(result) {
        return false;
    } else {
        return true; 
    }
}


// validate date in Validate dd/mm/yyyy or dd-mm-yyyy format
export function ddmmyyDate(inputText) {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  
    // Match the date format through regular expression
    if (inputText.value.match(dateformat)) {
        //Test which seperator is used '/' or '-'
        var lopera1 = inputText.value.split("/");
        var lopera2 = inputText.value.split("-");
        lopera1 = lopera1.length;
        lopera2 = lopera2.length;
  
        // Extract the string into month, date and year
        let pdate;
        if (lopera1 > 1) {
            pdate = inputText.value.split("/");
        } else if (lopera2 > 1) {
            pdate = inputText.value.split("-");
        }
    
        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
  
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
            alert("Invalid date format!");
            return false;
            }
        }
  
        if (mm == 2) {
            let lyear = false;
    
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
            lyear = true;
            }
    
            if (lyear == false && dd >= 29) {
            return false;
            }
            if (lyear == true && dd > 29) {
            return false;
            }
        }
        return true;
    } else {
        document.form1.text1.focus();
        return false;
    }
}
  
export function mmddyyDate(inputText) {
    var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if (inputText.value.match(dateformat)) {
        document.form1.text1.focus();
    
        //Test which seperator is used '/' or '-'
        var lopera1 = inputText.value.split("/");
        var lopera2 = inputText.value.split("-");
        lopera1 = lopera1.length;
        lopera2 = lopera2.length;
    
        // Extract the string into month, date and year
        let pdate;
        if (lopera1 > 1) {
            pdate = inputText.value.split("/");
        } else if (lopera2 > 1) {
            pdate = inputText.value.split("-");
        }

        var mm = parseInt(pdate[0]);
        var dd = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
  
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
            alert("Invalid date format!");
            return false;
            }
        }

        if (mm == 2) {
            let lyear = false;
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if (lyear == false && dd >= 29) {
                alert("Invalid date format!");
                return false;
            }
            if (lyear == true && dd > 29) {
                alert("Invalid date format!");
                return false;
            }
        }
  
      return true;
    } else {
        return false;
    }
}
  
  // To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
export function normalPassword(inputPassword) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (inputPassword.value.match(passw)) {
        return true;
    }
    return false;
}
  
// To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter
export function capitalizedPassword(inputPassword) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputPassword.value.match(passw)) {
        return true;
    }
    return false;
}
  
// Input Password and Submit [7 to 15 characters which contain at least one numeric digit and a special character
export function goodPass(inputPassword) {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inputPassword.value.match(paswd)) {
        return true;
    }
    return false;
}
  
// Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
export function strongPass(inputPassword) {
    var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputPassword.value.match(paswd)) {
        return true;
    }
    return false;
}
  