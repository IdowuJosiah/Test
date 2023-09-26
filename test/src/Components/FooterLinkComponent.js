import React from "react"
import "../css/FooterLinkComponent.css"
 const FooterLinkComponent = () => {

    const Links= [
        {
            Header: "EXPERTISE",
            Links:[
                {
                    LinkTitle: "AngularJS Development"

                },
                {
                    LinkTitle: "Laravel Development Flutter"

                },
                {
                    LinkTitle: "Development Database"

                },
                {
                    LinkTitle: "Development Unity3D"

                },
                {
                    LinkTitle: "Deployment"

                },
            ]
        },
      {
            Header: "SOLUTION",
            Links:[
                {
                    LinkTitle: "AR & VR Solutions"
                },
                {
                    LinkTitle: "Blockchain Development"
                },
                {
                    LinkTitle: "Cloud Computing"
                },
                {
                    LinkTitle: "IoT Solutions"
                },
                {
                    LinkTitle: "Omnichannel Solutions"
                },
            ]
        },
        {
            Header: "SERVICES",
            Links:[
                {
                    LinkTitle: "Application Development"
                },
                {
                    LinkTitle: "Game Development"
                },
                {
                    LinkTitle: "MVP Development Software"
                },
                {
                    LinkTitle: "Web Development"
                },
                {
                    LinkTitle: "Testing"
                },
            ]
        },
        {
            Header: "OUTSOURCING",
            Links:[
                {
                    LinkTitle: "Engagement Models"
                },
                {
                    LinkTitle: "Offshore Outsourcing"
                },
                {
                    LinkTitle: "Offshore Development"
                },
                {
                    LinkTitle: "Hire PHP Developers"
                },
                {
                    LinkTitle: "AWS Consulting"
                },
            ]
        },
    ]
     const AddressDetails =[
         {
             Title: "LOCATION",
             Address: "3-5 Faith In Christ Street Off Demurin, Ile-eja Ketu, Lagos, Nigeria."
         },
         {
             Title: "OTHER LOCATION",
             Address: "Office 5 Alade Complex University Of Abuja Abuja, Nigeria."
         }
     ]
    return(
        <section className="footer-links">
                <div className="footer-link-comp">
                    {Links.map((link, index)=>{
                        return(
                            <div className="footer-links-sect">
                                <h2>
                                    {link.Header}
                                </h2>
                                <div className="footer-link-list">
                                        {link.Links.map((subLink, index) => {
                                            return(
                                                <ul>
                                                    <li>
                                                        {subLink.LinkTitle}
                                                    </li>

                                                </ul>
                                            )
                                        })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="footer-address-comp">
                    {AddressDetails.map((Ads, index)=>{
                        return(
                            <div className="footer-address">
                                <div>
                                    <h2>
                                        {Ads.Title}
                                    </h2>
                                    <p>
                                        {Ads.Address}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </section>
    )
 }
 export default FooterLinkComponent