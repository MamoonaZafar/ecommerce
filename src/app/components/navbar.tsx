
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'
import {LuLogIn} from 'react-icons/lu' 



const navbar = () => {
  return (
   <div className="top-0 bg-white fixed w-full h-20 z-[40]">
          <div className=' mx-auto flex w-screen items-center justify-between px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:px-20'>
            <Link className='cursor-pointer' href='/'>
              <Image src='/logo.webp' alt='logo' width="136" height= "24"></Image>
            </Link>
            <div className='hidden flex-grow items-center justify-evenly px-5 lg:flex'>
              <div>
                  <ul className='flex space-x-10 font-medium'>
                    <Link href="/female">
                      <li className='cursor-pointer hover:text-gray-700'>Female</li>
                    </Link>
                    <Link href="/male">
                      <li className='cursor-pointer hover:text-gray-700'>Male</li>
                    </Link>
                    <Link href="/kids">
                      <li className='cursor-pointer hover:text-gray-700'>Kids</li>
                    </Link>
                    <Link href="/products">
                      <li className='cursor-pointer hover:text-gray-700'>All Products</li>
                    </Link>
                  </ul>
                </div>
                <div className='flex min-w-[175px] items-center space-x-2 rounded-md border-[1px] border-gray-300 px-1 py-[3px] xl:min-w-[250px]'>
                  <AiOutlineSearch size={18}/>
                  <input className="input-field flex-grow border-none text-xs outline-none" type="text" placeholder='What you looking for'></input> 
              </div>
              </div>
              <div className='inline-flex h-8 min-w-[95px] items-center justify-between space-x-3 custom1:min-w-[115px] custom1:space-x-5 lg:h-12'>
                <div className='inline-flex items-center space-x-5'>
                  <button className='inline-flex h-8 w-8 items-center justify-center lg:h-12 lg:w-12'>
                    <LuLogIn size={30} color='green'/>
                  </button>
                  <Link href='/' className='relative hidden cursor-pointer rounded-full bg-gray-100 p-3 lg:flex'>
                    <AiOutlineShoppingCart size={25}/>
                    <span className='absolute right-1 top-0 rounded-full bg-red-500 px-[6px] py-[2px] text-xs text-white'>0</span>
                  </Link>
                  <div className='block cursor-pointer lg:hidden'>
                  <  AiOutlineMenu size={25}/>
                  </div>
                  <div className= 'items-centers absolute min-h-screen w-screen flex-col justify-center space-y-5 bg-white text-gray-800 lg:hidden hidden'>
                  <Link href='/' className='relative mx-auto w-fit rounded-full bg-gray-100 p-3'>
                    <AiOutlineShoppingCart size={20}/>
                    <span className='absolute right-1 top-0 rounded-full bg-red-500 px-[6px] py-[2px] text-xs text-white'>0</span>
                  </Link>
                  <div className='flex flex-col space-y-3 text-center font-medium'>
                  <ul className='flex space-x-10 font-medium'>
                    <Link href="/">
                      <li className='cursor-pointer hover:text-gray-700'>Female</li>
                    </Link>
                    <Link href="/">
                      <li className='cursor-pointer hover:text-gray-700'>Male</li>
                    </Link>
                    <Link href="/">
                      <li className='cursor-pointer hover:text-gray-700'>Kids</li>
                    </Link>
                    <Link href="/">
                      <li className='cursor-pointer hover:text-gray-700'>All Products</li>
                    </Link>
                  </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
  
  )
}

export default navbar
