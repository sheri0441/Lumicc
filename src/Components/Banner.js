import fees from '../Asset/flexible-fees.svg'
import lock from '../Asset/lock.svg'
import wallet from '../Asset/wallet.svg'


const Banner = () => {
    return(
        <div className="bg-primary w-full text-white font-Manrope py-5
        max-w-screen-desktop mx-auto">
            <div className='flex items-center justify-evenly flex-wrap'>
                <div className='text-center mt-3 lg:mt-0'>
                    <img className='mx-auto' src={fees} alt="" />
                    <h3 className=' font-extrabold'>Flexible Fees</h3>
                    <p className='font-light'>5% - 20% Fee structures</p>
                </div>
                <div className='text-center mt-3'>
                    <img className='mx-auto' src={lock} alt="" />
                    <h3 className=' font-extrabold'>Flexible Fees</h3>
                    <p className='font-light'>5% - 20% Fee structures</p>
                </div>
                <div className='text-center mt-3'>
                    <img className='mx-auto' src={wallet} alt="" />
                    <h3 className=' font-extrabold'>Flexible Fees</h3>
                    <p className='font-light'>5% - 20% Fee structures</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;