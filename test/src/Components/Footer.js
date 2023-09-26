import React from "react"
import FooterLinkComponent from "./FooterLinkComponent";
import FooterInfoComponent from "./FooterInfoComponent";
import "../css/Footer.css"
const Footer =() =>{
    return(
        <section className='footer-comp'>
            <div className="page-width">
                <FooterLinkComponent/>
                <FooterInfoComponent/>
            </div>

        </section>
    )
}
export default Footer