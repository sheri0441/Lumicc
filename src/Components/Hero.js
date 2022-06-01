import pic from "../Asset/monologe.png"
import Form from "./Form";

const Hero = () => {
    return(
        <div className="hero  text-center pt-24 font-Manrope md:text-left pb-5 max-w-screen-desktop mx-auto " id="hero">
            <div className="w-full md:px-8 desktop:pl-24 desktop:pr-28 flex flex-wrap items-center justify-between">
                <div className="max-w-[600px] mx-auto">
                    <h1 className="text-black  font-bold text-3xl md:text-4xl md:font-extrabold  md:w-[20ch]">Monetize your space. Leverage your skills.</h1>
                    <p className="text-black text-sm font-medium px-5 md:px-0 my-5 ">Lumicc makes it easy for publishers to start monetizing their online and offline ad space with fewer barriers to entry, all the while helping creative pros grow their client base with new business opportunities. Lumicc is a full-service media marketplace bringing a range of creative services and advertising channels under one roof.</p>
                    <img className="mx-auto hidden md:block " src={pic} alt="" />
                </div>
                <Form />
            </div>
        </div>
    )
}
export default Hero;