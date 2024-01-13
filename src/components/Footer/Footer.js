import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Features</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer