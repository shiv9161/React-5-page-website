import React from 'react'
import "./style.css"

const ContactForm = () => {
    return (
        <div>
            <div className="container mt-5 cont-form">
                <h2 className='text-center'>Contact Us</h2>
                <form className=''>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            placeholder='Enter your name'
                        />
                    </div>
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
                        <label htmlFor="number" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="number"
                            name="number"
                            required
                            placeholder='Enter your number'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
