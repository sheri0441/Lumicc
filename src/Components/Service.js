import Card from "./Card";
import backbtn from '../Asset/backbtn.svg';
import forwordbtn from '../Asset/forwordbtn.svg';


const Service = () => {

    
    const scrollX = (direction , block) => {
        let item;
        if (block === 'display'){
            item = document.getElementById('display');
        }else{
            item = document.getElementById('OOH DOOH');
        }
        if(direction === 'right'){
            item.scrollLeft += 250;       
        } else {
            item.scrollLeft -= 250
        }
    }

    return(
        <div className=" mt-10 md:mt-14 lg:mt-20 serviceBG text-primary font-Manrope pb-10" id="service">
          <h2 className="text-3xl font-extrabold md:text-5xl text-center mb-5 md:mb-14 lg:mb-40">Checkout some of our services</h2>
          <div className="ml-5 md:ml-14 lg:ml-24" >
              <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-4xl font-extrabold capitalize" >display </h3>
                  <div className="flex items-center mr-3 md:mr-8 lg:mr-20">
                      <img onClick={() => scrollX('left', 'display')} className='mr-4' src={backbtn} alt="" />
                      <img onClick={() => scrollX('right', 'display')} src={forwordbtn} alt="" />
                  </div>
              </div>
              <div className="overflow-hidden scroll-smooth " id="display">
                <div className="mt-16 flex w-fit ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
              </div>
          </div>
          <div className="ml-5 md:ml-14 lg:ml-24 mt-7 md:mt-14 lg:mt-28" >
              <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-4xl font-extrabold capitalize" >OOH &amp; DOOH </h3>
                  <div className="flex items-center mr-3 md:mr-8 lg:mr-20">
                      <img onClick={() => scrollX('left', 'OOH & DOOH')} className='mr-4' src={backbtn} alt="" />
                      <img onClick={() => scrollX('right', 'OOH & DOOH')} src={forwordbtn} alt="" />
                  </div>
              </div>
              <div className="overflow-hidden scroll-smooth " id="OOH DOOH">
                <div className="mt-16 flex w-fit ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Service;