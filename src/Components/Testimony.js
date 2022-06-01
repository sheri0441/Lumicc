import avataar from "../Asset/avataar.png"
import stars from "../Asset/stars.svg"
import user from "../Asset/Users.png"
import backbtn from '../Asset/backbtn.svg';
import forwordbtn from '../Asset/forwordbtn.svg';


const Testimony = () => {
    return(
        <div className="font-Manrope text-primary pt-28 text-center pb-9 ">
            <img className="hidden md:block absolute left-[50%] translate-x-[-50%] -z-10 "  src={user} alt="" />
            <div className="max-w-[470px] mx-auto flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-extrabold ">Testimonials</h2>
                <p className="font-medium mt-7">We’re proud to have helped over 200,000 small and medium-sized businesses reach new heights!</p>
                <img className="mx-auto" src={avataar} alt= "" />
                <div>
                    <p className="font-medium">“Lumicc really helped me get my business off the ground. I was able to determine my target market and reach them effectively with Lumicc. This is invaluable for any small business owner.”</p>
                    <p className="font-bold text-xl mt-4">Richard Craig</p>
                    <img className="mx-auto mt-2" src={stars} alt="" />
                </div>
                <div className="flex items-center mx-auto mt-6  md:mt-14">
                    <img className="mr-3" src={backbtn} alt="" />
                    <img src={forwordbtn} alt="" />
                </div>
                <button className="btnstyle mt-16" >Get started</button>
            </div>
        </div>
    )
}

export default Testimony;