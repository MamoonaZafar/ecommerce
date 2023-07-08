import Image from "next/image"
import Link from "next/link"

const products = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10 pt-6">
        <p className="text-center text-sm font-bold uppercase text-[#0062f5]">Products</p>
        <p className="text-center text-3xl font-bold text-[##212121]">Check What We Have</p>
        <div className="flex w-full items-center justify-around space-x-10 xl:justify-center xl:space-x-0 2xl:space-x-10">
            <Link href='#' className="z-10 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 ">
                <div>
                    <Image src='/img/product1.png' alt="product" width={600} height={600} className="h-[344px] w-[325px]  bg-blue-100 object-cover"></Image>
                </div>
                <h2 className="mt-2 text-lg font-semibold">Brushed Raglan Sweatshirt</h2>
                <h4 className="mt-2 text-lg font-semibold">$195</h4>
            </Link>
            <Link href='#' className="z-10 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 md:block">
                <div>
                    <Image src='/img/product2.png' alt="product" width={600} height={600} className="h-[344px] w-[325px]  bg-blue-100 object-cover"></Image>
                </div>
                <h2 className="mt-2 text-lg font-semibold">Cameryn Sash Tie Dress</h2>
                <h4 className="mt-2 text-lg font-semibold">$545</h4>
            </Link>
            <Link href='#' className="z-10 transform-gpu cursor-pointer transition-transform duration-500 ease-in hover:scale-105 xl:block">
                <div>
                    <Image src='/img/product3.png' alt="product" width={600} height={600} className="h-[344px] w-[325px]  bg-blue-100 object-cover"></Image>
                </div>
                <h2 className="mt-2 text-lg font-semibold">Flex Sweatshirt</h2>
                <h4 className="mt-2 text-lg font-semibold">$175</h4>
            </Link>
        </div>
    </div>
  )
}

export default products