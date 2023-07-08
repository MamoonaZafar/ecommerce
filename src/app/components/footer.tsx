import Image from "next/image"
import Link from "next/link"
import {FaLinkedinIn, FaGithub, FaFacebookF} from 'react-icons/fa'


const footer = () => {
  return (
    <div className="mt-5">
        <div className="flex w-[60%] flex-col items-start justify-between space-y-10 px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:mx-auto lg:w-[100%] lg:flex-row lg:space-x-32 lg:space-y-0 lg:px-20">
            <div className="flex basis-2/5 flex-col space-y-8">
                <Link href='/' className="cursor-pointer">
                    <Image src='/logo.webp' width={136} height={24} alt="logo"></Image>
                </Link>
                <p className="mt-3 text-gray-600">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div className="flex space-x-4">
                <div className='flex space-x-4 max-w-[330px] mr-8 py-4'>
                    <div className='shadow-lg shadow-gray-400 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='shadow-lg shadow-gray-400 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='shadow-lg shadow-gray-400 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaFacebookF />
                    </div>   
                    </div>
                </div>
            </div>
            <div className="flex basis-1/5 flex-col space-y-5">
                <p className="text-xl font-semibold text-gray-700">Company</p>
                <ul className="space-y-3 text-gray-600">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Terms of Use</li>
                    <li className="cursor-pointer">Privacy Policy</li>
                    <li className="cursor-pointer">How it Works</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className="flex basis-1/5 flex-col space-y-5">
                <p className="text-xl font-semibold text-gray-700">Support</p>
                <ul className="space-y-3 text-gray-600">
                    <li className="cursor-pointer">Supprt center</li>
                    <li className="cursor-pointer">24h Service</li>
                    <li className="cursor-pointer">Quick Chat</li>
                </ul>
            </div>
            <div className="flex basis-1/5 flex-col space-y-5">
                <p className="text-xl font-semibold text-gray-700">Contact Us</p>
                <ul className="space-y-3 text-gray-600">
                    <li className="cursor-pointer">Whatsapp</li>
                    <li className="cursor-pointer">24h Support</li>
                </ul>
            </div>
        </div>
        <div className="mt-5 border-t-[1px] border-t-black text-gray-500">
            <div className="flex flex-col items-start justify-between space-x-0 space-y-5 px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:flex-row lg:space-x-20 lg:space-y-0 lg:px-20">
                <div>Copyright@2023 Dine Market</div>
                <div>Design By:
                    <span className="text-lg font-semibold text-gray-900">&nbsp;Mamoona Zafar</span>
                </div>
                <div>Code By:
                    <span className="text-lg font-semibold text-gray-900">&nbsp;Mamoona Zafar</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer