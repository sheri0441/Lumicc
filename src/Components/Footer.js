import logo from "../Asset/icon.png"
import facebookLogo from "../Asset/facebook.svg";
import instagramLogo from "../Asset/instagram.svg";
import linkedinLogo from "../Asset/linkedin.svg";
import twitterLogo from "../Asset/twitter.svg";

const Footer = () => {
    return(
        <div className="bg-primary py-11">
            <hr className="border-gray-400" />
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-between my-auto px-8 py-8"
            >
                <div className="flex items-center font-Manrope font-bold mt-3 md:mt-0">
                    <img className="w-16" src={logo} alt="" />
                    <p className="ml-3 text-white text-2xl ">Lumicc</p>
                </div>
                <div className="flex flex-row mx-auto lg:w-48 justify-between  mt-3 md:mt-0">
                    <a href="#" className="p-1 bg-white rounded-full flex justify-center items-center shadow-sm shadow-black/20"><img src={facebookLogo} alt="link" /></a>
                    <a href="#" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={twitterLogo} alt="link" /></a>
                    <a href="#" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={linkedinLogo} alt="link" /></a>
                    <a href="#" className=" p-1 bg-white rounded-full ml-4 md:ml-0 flex justify-center items-center shadow-sm shadow-black/20"><img src={instagramLogo} alt="link" /></a>
                </div>
                <div className="selectionstyle border-[1px] border-white rounded-full pl-1 mt-3 md:mt-0">
                    <select  className="appearance-none bg-primary text-white  mt-4  w-[230px]  px-9 outline-none ">
                        <option defaultChecked>English</option>
                        <option>Urdu</option>
                    </select>
                </div>
                <p className="text-white font-Inter text-sm ml-3 mt-3 md:mt-0">&copy; Copyright 2022, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;