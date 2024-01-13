import React from 'react'

const OneTwoAbout = () => {
    return (
        <div>
            <div className="container mt-1 mb-5">
                <div className="row">
                    {/* Image Column */}
                    <div className="col-md-6">
                        <img
                            src="https://via.placeholder.com/600x200.png"
                            alt="Sample Image"
                            className="img-fluid"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="col-md-6">
                        <h2>Content Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneTwoAbout
