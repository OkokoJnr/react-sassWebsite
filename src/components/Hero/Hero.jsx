import './Hero.css'

function Hero (){

    return(<>
        <section className='hero'>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-heading text">
                    A powerful solution to grow your startup. Fast!
                    </h1>
                    <p className="hero-text">
                        Organize, collaborate, and track progress seamlessly with our
                        one-stop-shop startup growth tool.
                    </p>
                    <div className="hero-buttons">
                        <a href="" className="btn btn-primary">Get Started</a>
                        <a href="" className="btn">
                            <i className="fas fa-laptop"></i>Book a Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Hero;