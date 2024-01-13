import React from 'react';
import "./style.css";

const Login = () => {
    return (
        <>
            <div className="container login-dis">
                <form className='login-form'>
                    <h3 className='text-center'>Login Here</h3>
                    <div className="form-group">
                        <label htmlFor="name">Email Address</label>
                        <input type="email" className="form-control" name="name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" className="form-control" name="email" />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
