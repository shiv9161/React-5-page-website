import React from 'react'
import "./style.css"

const Login = () => {
    return (
        <>
            <div className="container mt-5 log-form">
                <h2 className='text-center'>Login Here</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            placeholder='Enter email address'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
