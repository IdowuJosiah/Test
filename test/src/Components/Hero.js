import React from "react"
import "../css/Hero.css"
const Hero =() => {
    return(
        <div className="body">
            <section className="page-width hero-comp">
                <div className="hero-header">
                    <p>
                        HELLO THERE
                    </p>
                    <h2>
                        We Are
                    </h2>
                    <h2>
                        SphiderAss Corp
                    </h2>
                    <p className="hero-borderline">

                    </p>
                </div>
                <div className="hero-text">
                    <p>
                        SphiderAss Web is leading I.T Company. It was founded in January,
                        2019. Set-up to create softwares/application and impact people's
                        live by sharing the required knowledge on softwares and programming
                        languages. The company is built on a solid structure of excellence,
                        integrity and professionalism. The organization consists of professionals
                        and expertise with great experience on the field of I.T. At sphiderass the
                        goal is to enhance the society's knowledge on I.T and impact the surrounding
                        through corporate and social responsibility programs.
                    </p>
                </div>
                <div className="hero-details-comp">
                        <div>
                            <p className="hero-details-num">
                                127
                            </p>
                            <p className="hero-details-text">
                                Awards Received
                            </p>
                        </div>
                        <div>
                            <p className="hero-details-num">
                                1505
                            </p>
                            <p className="hero-details-text">
                                Cups of Coffee Shared
                            </p>
                        </div>

                        <div>
                            <p className="hero-details-num">
                                105
                            </p>
                            <p className="hero-details-text">
                                Projects Completed
                            </p>
                        </div>
                        <div>
                            <p className="hero-details-num">
                                102
                            </p>
                            <p className="hero-details-text">
                                Happy Clients
                            </p>
                        </div>
                </div>
            </section>
        </div>

    )
}
export default Hero