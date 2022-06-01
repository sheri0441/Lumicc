import live from '../Asset/livecall.png';
import paid from '../Asset/paid.svg';
import touch from '../Asset/touch.svg';
import media from '../Asset/media.svg';



const HowItWork = () =>{
    return(
        <div className="w-full font-Manrope text-primary py-16 flex flex-col justify-center" id='work'>
            <h2 className="text-3xl font-extrabold md:text-5xl text-center mb-5 md:mb-14 lg:mb-40" >How it works</h2>
            <div className='flex flex-wrap'>
                <img className='mx-auto lg:mx-0 lg:-ml-40' src={live} alt='' />
                <div className='flex flex-wrap lg:flex-col lg:justify-between min-h-[600px] w-full max-w-[670px] mx-auto '>
                    <div className='flex flex-col lg:flex-row items-start'>
                        <img className='mx-auto w-24 lg:mr-7' src={touch} alt='' />
                        <div className='text-center lg:text-left mb-5 lg:mb-0'>
                            <h3 className='font-extrabold text-2xl'>Get in touch</h3>
                            <p className='mt-3 md:text-lg font-medium'>Fill out the contact form on this page, and we'll get back to you within 48 hours to learn more about your services and answer any questions you may have.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-start'>
                        <img className='mx-auto w-24 lg:mr-7' src={media} alt='' />
                        <div className='text-center lg:text-left mb-5 lg:mb-0'>
                            <h3 className='font-extrabold text-2xl'>we’ll help setup your MEDIA listing</h3>
                            <p className='mt-3 md:text-lg font-medium'>Our team will help you create your listing, price your services, and help you market and brand your offer, ensuring your listing is poised for success. </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-start'  >
                        <img className='mx-auto w-24 lg:mr-7' src={paid} alt='' />
                        <div className='text-center lg:text-left mb-5 lg:mb-0'>
                            <h3 className='font-extrabold text-2xl'>Get paid</h3>
                            <p className='mt-3 md:text-lg font-medium'>A designated account manager will handle all customer relations on your behalf, and we'll only contact you once an order is placed; so that you can focus on what you do best—thinking creatively and delivering outstanding solutions!</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btnstyle max-w-[375px] text-center mx-auto mt-24'>Get started</button>
        </div>
    )
}

export default HowItWork;