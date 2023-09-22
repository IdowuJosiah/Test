import React, {useState} from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import "../css/Banner.css"

const Banner =() => {
    const BannerSlides = [
        {
            BannerImage: "annie-spratt-hCb3lIB8L8E-unsplash.jpg",
            BannerHeader: "We Are SphiderAss",
            BannerText: "SphiderAss Web's Team Of Top-Rated Software Development Experts Supported By A Superlative Agile Process, Top Enterprises Rely On Our Expertise For Their Innovative Project Outsourcing.",
            BannerButton:"Get Started"
        },
        {
            BannerImage: "christopher-gower-m_HRfLhgABo-unsplash.jpg",
            BannerHeader: "We Are Dreamers.",
            BannerText: "Get on the wagon of sure shot success with the high potential technology of blockchains in all verticals of commerce and business preparing for digital transformation.",
            BannerButton:"Get Started"
        },
        {
            BannerImage: "glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
            BannerHeader: "We Bring Dreams To Reality,",
            BannerText: "With SphiderAss Web, you can bank on our extensive experience in open source software development. Our proven expertise, deep domain knowledge and years of experience combined have left us inculcating industry best practices which enable us to help clients with robust, scalable, bug free solutions on open source platforms.",
            BannerButton:"Get Started"
        },{
            BannerImage: "radek-grzybowski-eBRTYyjwpRY-unsplash.jpg",
            BannerHeader: "Because Reality Is The Only Thing Real.",
            BannerText: "Our result-driven project management is spread globally and capable to offer seamless communication. The solutions that we deliver would yield advantages in the advanced, corporate, internet-facing, and hybrid environments.",
            BannerButton:"Get Started"
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newSlide = isFirstSlide ? BannerSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newSlide)
    }
    const nextSlide = () => {
        const isLastSlide =currentIndex === BannerSlides.length - 1
        const newSlide = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }
    return(
        <section>
            <div className="banner">
                <div className="logo">
                    <img alt="logo" src="logo.png"/>
                </div>
                <div style={{backgroundImage: `url(${BannerSlides[currentIndex].BannerImage})`}} className="banner-image">
                    <div className="overlay"></div>
                    <div className="banner-header">{BannerSlides[currentIndex].BannerHeader}
                    </div>
                    <div className="banner-text">
                        <div>
                            {BannerSlides[currentIndex].BannerText}
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-left-button bn"
                 onClick={prevSlide}>
                <BsChevronLeft color="#ffff" size={50}/>
            </div>
            <div className="banner-right-button bn"
                 onClick={nextSlide}>
                <BsChevronRight color="#ffff" size={50}/>
            </div>
        </section>
    )
}
export default Banner