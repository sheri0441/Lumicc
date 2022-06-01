import group from '../Asset/group.png'
import painting from '../Asset/painting.svg'

const Buyer = () => {
    return(
        <div className='relative'>
            <div className='flex justify-between h-[826px] overflow-hidden lg:h-auto'>
                <img className='hidden lg:block' src={painting} alt='building' />
                <img src={group} alt='group photo' />
            </div>
            <div className="bg-white/40 md:bg-white py-14 max-w-[720px] px-4 md:pl-16 md:pr-10 rounded-t-lg text-primary absolute top-[25%] right-0 md:left-[25%]">
                <h2 className='text-2xl text-center md:text-left font-extrabold md:text-5xl'>Buyers Guaranteed. Sellers Wanted!</h2>
                <p className='mt-5 font-medium md:text-lg'>Research shows that almost 95% of web traffic goes to the first search engine results page, leaving only 5% for remaining search results pages. However, Lumicc provides a marketplace where all your listings are guaranteed a buyer at no additional cost and with less hassle.</p>
            </div>
        </div>
    )
}

export default Buyer;