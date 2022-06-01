import closeicon from '../Asset/closingicon.svg'
import openicon from '../Asset/openingicon.svg'

const FAQ = () => {

    const close = () => {
        const answer = document.getElementById('answer');
        const closeButton = document.getElementById('cicon');
        const openButton = document.getElementById('oicon');
        console.log(answer)
        if (answer.style.display === "block"){
            answer.style.display ="none";
            closeButton.style.display ="none";
            openButton.style.display ="block";
        } else {
            answer.style.display ="block";
            closeButton.style.display ="block";
            openButton.style.display ="none";
        }
    }
    
    return(
        <div className="w-full bg-primary py-16 md:py-32" id="FAQ">
            <h2 className=" text-white font-Poppins font-bold text-3xl md:text-[44px] text-center">Frequently Ask Questions</h2>
            <div className='flex flex-wrap justify-center items-center px-2 md:px-0 lg:items-start mt-5'>
                <div className='w-full max-w-[555px]'>
                    <div className='bg-white ml-1  px-7 w-full max-w-[555px] font-Manrope flex items-start py-2 rounded-2xl mt-3'>
                        <img className=' ml-1 mr-1 pt-3 pr-2 w-auto ' onClick={close} src={closeicon} id="cicon" alt="" />
                        <img className=' ml-1 mr-1 pr-2 hidden' onClick={close} src={openicon} id="oicon" alt="" />
                        <div>
                            <p className='font-extrabold text-primary text-lg'>
                            How can I monetize my website or app traffic?
                            </p>
                            <p className='block font-medium text-sm' id='answer'>To monetize your webiste or app traffiic on an ad exchange, you need to have at least 5M page views per month. Lumicc offers flexible conditions and affordable prices for our partners. Lumicc allows publishers to control which ads would appear on their page and a fair price to display those ads. WHAT’S MORE, our min. requirment is only 10,000 page views per month! </p>
                        </div>
                    </div>
                    <div className='bg-white ml-1  px-7 w-full max-w-[555px] font-Manrope flex items-start py-2 rounded-2xl mt-3 '>
                            <img className='ml-1 mr-1 pr-2 ' onClick={close} src={openicon} alt="" />
                        <div>
                            <p className='font-extrabold text-primary text-lg'>
                            What can I sell?
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-full max-w-[555px] lg:ml-2'>
                    <div className='bg-white ml-1  px-7 w-full max-w-[555px] font-Manrope flex items-start py-2 rounded-2xl mt-3 '>
                            <img className='ml-1 mr-1 pr-2 ' onClick={close} src={openicon} alt="" />
                        <div>
                            <p className='font-extrabold text-primary text-lg'>
                            How much time will I need to invest?
                            </p>
                        </div>
                    </div>
                    <div className='bg-white ml-1  px-7 w-full max-w-[555px] font-Manrope flex items-start py-2 rounded-2xl mt-3 '>
                            <img className='ml-1 mr-1 pr-2 ' onClick={close} src={openicon} alt="" />
                        <div>
                            <p className='font-extrabold text-primary text-lg'>
                            How do I price my service?
                            </p>
                        </div>
                    </div>
                    <div className='bg-white ml-1  px-7 w-full max-w-[555px] font-Manrope flex items-start py-2 rounded-2xl mt-3 '>
                            <img className='ml-1 mr-1 pr-2 ' onClick={close} src={openicon} alt="" />
                        <div>
                            <p className='font-extrabold text-primary text-lg'>
                            How do I get paid?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;