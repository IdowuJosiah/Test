import React from "react"
import "../css/FooterInfoComponent.css"
import {AiOutlineMail} from "react-icons/ai"

const FooterInfoComponent =() =>{
    return(
        <section>
            <div className="footer-info-comp">
                <div className='fic-rs'>
                    <p>
                        Throughout Our Professional Expendition, We Have Dealt With
                        A Lot Of Clients From Different Business Domains, From
                        Different Parts Of The World. With Our Excellent And Dedicated
                        Service, We Have Ensured Completely High Quality Outputs For
                        The Clients. This Is Why We Possess A Terrific Client Retention
                        Record. Here Is A List Of Clients For Whom We Worked And Catered
                        Our Top Notch Services, Have A Look.
                    </p>
                </div>
                <div className="fic-ls">
                    <div className="fic-ls-header">
                        <p>
                            Get Notified
                        </p>
                    </div>
                    <div className="fic-ls-text">
                        <p>
                            By giving us your Email address you are optin-in to receiving
                            the latest news, offers, promotions and competition from SphiderAss
                            Take A Peek We manage your data.
                        </p>
                    </div>
                    <div className="fic-subscribe">
                        <div className="fic-subscribe-input">
                            <input placeholder="Email Address" className="fic-input"/>
                            <p className="mail-icon">
                                <AiOutlineMail className="mi"/>
                            </p>
                            <button className="fic-button">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright">
                <p>

                </p>
                <p>

                </p>
            </div>
        </section>
    )
}
export default FooterInfoComponent