import pic from '../Asset/cardpic.png'

const Card = () => {
    return(
        <div className='font-Manrope text-center w-[265px] mr-7 block'>
            <img src={pic} alt="" />
            <p className='text-primary font-medium text-2xl mt-5 '>Lorem Ipsum</p>
            <button className='btnstyle max-w-[133px] text-sm font-bold'>View details</button>
        </div>
    )
}

export default Card;