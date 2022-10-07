import { useState } from "react";
import { useFormValidate } from "../hooks/useFormValidate";

const UseFormValidate = () => {
    
    const [input, setInput] = useFormValidate({}); 

    const handleChange = (e) => {
        setInput({type:e.target.name, payload:e.target.value}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validFields = {
            fullname: input.fullname, 
            email: input.email, 
            password: input.password
        }
        console.log(input)
    }

    // jsx
    return (
        <div>
            <form onSubmit={handleSubmit} style={{maxWidth:'600px', margin:'20px auto'}}>
                {/* fullname */}
                <div className="input-control">
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" name="fullname" onChange={handleChange} onBlur={handleChange} placeholder="Enter full name"/>
                    {input.fullnameError && <small>{input.fullnameError}</small>}
                </div>

                {/* email */}
                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange} onBlur={handleChange} placeholder="Phone email address"/>
                    {input.emailError && <small>{input.emailError}</small>}
                </div>
                {/* password */}
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange} onBlur={handleChange} placeholder="Enter password"/>
                    {input.passwordError && <small>{input.passwordError}</small>}
                </div>

                {/* confirm password */}
                <div className="input-control">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" name="confirmPassword" onChange={handleChange} onBlur={handleChange} placeholder="Confirm password"/>
                    {input.confirmPasswordError && <small>{input.confirmPasswordError}</small>}
                </div>

                {/* buttons */}
                <div className="input-control">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    ) 
}



export default UseFormValidate; 


