import React from 'react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {FiShoppingCart} from 'react-icons/fi'
import Image from 'next/image'

const slide = () => {
  return (
    <div className='mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]'>
      <div className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>
        <div className='flex w-full flex-row items-start space-x-10'>
          <div className='flex flex-col space-y-10 lg:basis-5/12'>
           <Badge className='mt-10 w-fit rounded-lg bg-blue-100 px-6 py-2 font-semibold text-blue-900'>Sale 70%</Badge>
           <h1 className='text-5xl font-bold tracking-wide text-[#212121]'>An Industrial Take on Streetwear</h1>
           <p className='w-[75%] text-gray-600'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
           <Link href='/' className="cursor-pointer">
              <Button className='items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-primary-foreground hover:bg-primary/90 py-2 inline-flex h-10 w-auto space-x-2 bg-[#212121] px-8 focus-visible:bg-[#212121] sm:w-[50%] lg:h-20 lg:w-fit'>
                <FiShoppingCart/>
                <p className='my-5 inline-flex flex-row items-center justify-center space-x-1 lg:flex-col lg:space-x-0 2xl:flex-row 2xl:space-x-1'>Start Shopping</p>
              </Button>
           </Link>
           <div className='flex flex-wrap items-center justify-around gap-4'>
            <Image src='/img/hero1.png' alt='hero' width='92' height='30'></Image>
            <Image src='/img/hero2.png' alt='hero' width='92' height='30'></Image>
            <Image src='/img/hero3.png' alt='hero' width='92' height='30'></Image>
            <Image src='/img/hero4.png' alt='hero' width='92' height='30'></Image>
           </div>
          </div>
          <div className='hidden basis-7/12 justify-end lg:flex'>
            <div className='h-[575px] w-[575px] overflow-visible rounded-full bg-[#ffece3]'>
              <Image src='/img/hero.png' alt='hero' width='628' height='704' className='mx-auto -mt-5 h-[604px] w-[628px]'></Image>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default slide