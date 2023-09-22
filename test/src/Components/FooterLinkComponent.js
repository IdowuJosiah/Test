import React from "react"
 const FooterLinkComponent = () => {

    const Links= [
        {
            Header: "Expertise",
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
                    LinkTitle: "Development"
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
    return(
        <section>
                <div>
                    {Links.map((link, index)=>{
                        return(
                            <div>
                                <h2>
                                    {link.Header}
                                </h2>
                                <ul>
                                    <li>
                                        {link.Links}
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div>

                </div>
        </section>
    )
 }
 export default FooterLinkComponent