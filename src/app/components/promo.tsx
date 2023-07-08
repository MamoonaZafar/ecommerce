import React from 'react'
import Image from 'next/image'

const promo = () => {
  return (
<div className='mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]'>
   <div className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>
            <div className='flex w-full flex-col items-center justify-center space-y-10 pt-6'>
               <p className='text-center text-sm font-bold uppercase text-[#0062f5]'>Promotions</p>
               <p className='text-center text-3xl font-bold text-[#212121]'>Our Promtion Events</p>
               <div className='flex w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0'>
                  <div className='flex flex-col space-y-5 lg:basis-2/5 lg:justify-between'>
                     <div className='flex basis-1 flex-row items-center bg-[#d6d6d8] px-8 pt-8 text-[#212121] custom1:flex-row custom1:pb-0 lg:basis-1/2'>
                        <div className='flex flex-col'>
                            <p className='text-3xl font-bold'>Get Up TO <br/>
                              <span className='font-extrabold'>60%</span>
                            </p>
                            <p className='text-lg font-normal'>For The Summer Season</p>  
                        </div>
                       <Image src='/img/promotion1.png' alt='promo' width={282} height={218} className='mx-auto'></Image>
                     </div>
                     <div className='flex basis-1 flex-col items-center space-y-5 bg-[#212121] p-8 text-white lg:basis-1/2'>
                        <p className='text-4xl font-extrabold'>Get 30% OFF</p>
                        <div className='flex flex-col items-center justify-center space-y-1'>
                           <p className='text-sm font-normal uppercase'>Use Promo Code</p>
                           <p className='cursor-pointer rounded-lg bg-[#474747] px-4 py-2 text-sm font-semibold'>DINEWEEKENDSALE</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:lg:basis-3/5'>
                         <div className='flex basis-1 flex-col justify-between bg-[#efe1c7] px-6 pt-6 text-[#212121] md:basis-1/2'>
                           <div className='flex flex-col'>
                             <p className='text-lg font-normal'>Flex Sweatshirts</p>
                             <p className='text-lg font-normal'>
                                <span className='line-through'>$100.00</span>
                                <span className='ml-3 font-semibold'>$75.00</span>
                            </p>
                          </div>
                          <Image src='/img/promotion2.png' alt='promo' width={282} height={362} className='mx-auto'></Image>
                        </div>
                        <div className='flex basis-1 flex-col justify-between bg-[#d7d7d9] px-6 pt-6 text-[#212121] md:basis-1/2'>
                      <div className='flex flex-col'>
                          <p className='text-lg font-normal'>Flex Push Button Bomber</p>
                          <p className='text-lg font-normal'>
                              <span className='line-through'>$225.00</span>
                              <span className='ml-3 font-semibold'>$190.00</span>
                          </p>
                      </div>
                      <Image src='/img/promotion3.png' alt='promo' width={282} height={362} className='mx-auto'></Image>
                    </div>
                    </div>
                    
               </div>
           </div>
        </div>
    </div>
    
 
    
  )
}

export default promo