import Image from "next/image";
import React from "react";
export default function Topone() {
  return (
    <div className="w-[1440px] ">
             {/* only for mobile */}

<div className=" sm:hidden md:block lg:hidden xl:hidden 2xl:hidden w-[773px] h-[177px] text-[64px] font-bold mb-[370px] leading-[64px] max-sm:text-[36px] max-sm:left-[16px] max-sm:w-[315px] max-sm:h-[93px] max-sm:ml-4 max-sm:leading-8 ">
            CLOTHES THAT FITS YOU AND YOUR PERONALITY
             <h3 className="w-[545px] mt-[33px] font-normal leading-7 text-[16px] max-sm:w-[358px] max-sm:h-[50px] max-sm:text-[14px] max-sm:mt-2 max-sm:mb-8   ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
             <button className="w-[210px] h-[52px] bg-[#000000] rounded-[62px] text-[#ffffff] font-medium leading-[21.6px] max-ss:leading-[24px] text-[16px] max-sm:h-[52px] max-sm:w-[325px] ">Shop Now</button>

             <div className=" max-sm:h-[397px] max-sm:w-[55px] flex mt-[60px] ">
              <div className="max-sm:h-[106px] max-sm:w-[48px] max-sm:mt-[-40px] ">
                <h3 className="text-[40px] font-bold leading-[54px] ">200+</h3>
                <p className="max-sm:w-[250px]  font-normal text-[16px] max-sm:mt-1">Internationals Brands</p>
              </div>
              <div className="max-sm:mt-[-40px] max-sm:left-[129px] max-sm:relative">
                <h3 className="text-[40px] font-bold leading-[54px] ">2,000+</h3>
                <p className="max-sm:w-[200px] max-sm:mt-1 font-normal text-[16px]  ">High-Quality Products</p>
              </div>
              
             </div>
             <div className="max-sm:ml-[98px]">
                <h3 className="max-sm:mt-[-327px]  text-[40px] font-bold leading-[54px]  ">30,000+</h3>
                <p className="font-normal text-[16px] ">Happy Customers</p>
              </div>
             
                  </div>
      <div className=" bg-bannerImgFive bg-repeat bg-cover bg-bottom max-sm:w-[390px] max-sm:h-[448px] ">

      </div>

    
            
            <section className="max-sm:hidden bg-bannerImg bg-repeat bg-cover bg-bottom ">
              
              <div className="w-[1440px]  max-sm:relative h-screen flex items-end bg-blackOverlay">
                <div className="container mx-auto " >
                  
                  <div className="w-[773px] h-[177px] text-[64px] font-bold mb-[370px] leading-[64px] max-sm:text-[36px] max-sm:left-[16px] max-sm:w-[285px] max-sm:h-[93px] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
             <h3 className="w-[545px] mt-[33px] font-normal leading-7 text-[16px] max-sm:w-[358px] max-sm:h-[50px] max-sm:text-[14px]   ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
             <button className="w-[210px] h-[52px] bg-[#000000] rounded-[62px] text-[#ffffff] font-medium leading-[21.6px] max-ss:leading-[24px] text-[16px] max-sm:h-[52px] max-sm:w-[325px] ">Shop Now</button>

             {/* numbers */}
             <div className="max-sm:h-[397px] max-sm:w-[55px] flex mt-[60px] ">
              <div className="max-sm:h-[106px] max-sm:w-[48px] max-sm:mt-[-40px] ">
                <h3 className="text-[40px] font-bold leading-[54px] ">200+</h3>
                <p className="font-normal text-[16px] max-sm:mt-[-19px] ">Internationals Brands</p>
              </div>
              <div className="max-sm:mt-[-40px] max-sm:left-[100px] max-sm:relative">
                <h3 className="text-[40px] font-bold leading-[54px] ">2,000+</h3>
                <p className="font-normal text-[16px] max-sm:mt-[-19px] ">High-Quality Products</p>
              </div>
              <div className="">
                <h3 className="text-[40px] font-bold leading-[54px]  ">30,000+</h3>
                <p className="font-normal text-[16px] ">Happy Customers</p>
              </div>
             </div>
             
                  </div>
            

                </div>
                {/* black patti */}
              </div>
              </section>
              <div className="w-[1440px] h-[122px] bg-black  mt-8 flex "> 
              <div className="mt-[30px] flex relative left-10 ">

              <Image
              className="w-[166px] h-[33px] relative pt-[2.5px] ml-[60px]   "
              src={"/Vector2.png"}
              alt="icon image"
              width={166}
              height={33}
            ></Image>
            <Image
              className="w-[91px] h-[38px] relative pt-[2.5px] ml-[60px]   "
              src={"/Vector3.png"}
              alt="icon image"
              width={166}
              height={33}
            ></Image>
            <Image
              className="w-[156px] h-[36px] relative pt-[2.5px] ml-[60px]   "
              src={"/Vector5.png"}
              alt="icon image"
              width={166}
              height={33}
            ></Image>
            <Image
              className="w-[194px] h-[32px] relative pt-[2.5px] ml-[60px]   "
              src={"/Vector6.png"}
              alt="icon image"
              width={166}
              height={33}
            ></Image>
            <Image
              className="w-[206px] h-[33.4px] relative ml-[60px]   "
              src={"/Vector4.png"}
              alt="icon image"
              width={166}
              height={33}
            ></Image>
            </div>

              </div>
             


    </div>
        
      

    
  );
}
