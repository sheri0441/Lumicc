

const Form = () => {
    return(
        <div className="bg-white p-4 flex flex-col max-w-[462px] mx-auto rounded-2xl">
            <h2 className="text-primary text-2xl text-center font-extrabold md:text-left md:text-3xl">What's your specialty? Contact us to get started!</h2>
            <div className="flex flex-col mt-3">
            <input className="py-5 px-6 border-[1px] border-gray-300 rounded-xl placeholder:font-Manrope placeholder:text-[11px] placeholder:text-primary placeholder:capitalize mt-5" type="text" placeholder="name" />
            <input className="py-5 px-6 border-[1px] border-gray-300 rounded-xl placeholder:font-Manrope placeholder:text-[11px] placeholder:text-primary placeholder:capitalize mt-5" type="tel" placeholder="phone number" />
            <input className="py-5 px-6 border-[1px] border-gray-300 rounded-xl placeholder:font-Manrope placeholder:text-[11px] placeholder:text-primary placeholder:capitalize mt-5" type="email" placeholder="email" />
            <select className="py-5 px-6 border-[1px] border-gray-300 rounded-xl placeholder:font-Manrope placeholder:text-[11px] placeholder:text-primary placeholder:capitalize mt-5" name="" id="">
                <option selected disabled>what's your specialty?</option>
                <option>Podcast Hosts</option>
                <option>Influencers</option>
                <option>Markters</option>        
                <option>Street Teams</option>        
            </select>
            </div>
            <button className="btnstyle">Submit</button>
        </div>
    )
}

export default Form;