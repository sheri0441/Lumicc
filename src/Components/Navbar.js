import logo from "../Asset/icon.png"
import facebookLogo from "../Asset/facebook.svg";
import instagramLogo from "../Asset/instagram.svg";
import linkedinLogo from "../Asset/linkedin.svg";
import twitterLogo from "../Asset/twitter.svg";
import hamburger from "../Asset/hamburger.svg"
import { useState } from "react";

const Navbar = () => {
    const [navigation, setNav] = useState(false);

    const Nav = () => {
        const nav_bar = document.querySelector('nav');
        if (nav_bar.style.display === 'flex'){
            nav_bar.style.display = 'none';
        }else{
            nav_bar.style.display = 'flex';
        }
    }
    const navBG = () => {
        if (window.scrollY > 80){
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener("scroll", navBG)

    return(
        <div className={navigation ? "navigationStyle bg-white" : "navigationStyle"}>
                <a className="flex items-center lg:mr-auto" href="#hero">
                    <img src={logo} alt="lumicc" />
                    <p className=" ml-3 ">Lumicc</p>
                </a>
            <div className="md:hidden">
                <img onClick={Nav} src={hamburger} alt="" />
            </div>
            <nav className=" flex-col md:flex-row md:justify-between md:w-[455px] hidden absolute top-24 left-0 text-center bg-white p-5 w-full md:flex md:static md:p-0 md:bg-transparent md:items-center" >
                <a href="#work">How it Works</a>
                <a href="#service" className="mt-4 md:mt-0">Servies</a>
                <a href="#FAQ" className="mt-4 md:mt-0">FAQ</a>
                <a href="#" className="mt-4 md:mt-0">Advertiser</a>
            </nav>
            <div className="hidden lg:flex lg:flex-row mx-auto lg:w-48 justify-between lg:ml-auto lg:mx-0">
                <a href="https://www.facebook.com/" target="_blank" className="p-1 bg-white rounded-full flex justify-center items-center shadow-sm shadow-black/20"><img src={facebookLogo} alt="link" /></a>
                <a href="https://twitter.com/?lang=en" target="_blank" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={twitterLogo} alt="link" /></a>
                <a href="https://www.linkedin.com/login" target="_blank" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={linkedinLogo} alt="link" /></a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={instagramLogo} alt="link" /></a>

            </div>
        </div>
    )
}

export default Navbar;