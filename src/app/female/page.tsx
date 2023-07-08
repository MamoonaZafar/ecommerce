import Image from "next/image"
import Link from "next/link"



const page = () => {
  return (
    <div className="mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]">
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/product3.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Flex Sweatshirt</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ SweatShirt</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 175</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp3.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Imperial Alpaca Hoodie</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Hoodie</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 525</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp5.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Muscle Tank</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Shirts</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 75</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/product2.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Cameryn Sash Tie Dress</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Dress</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 545</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/product1.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Brushed Raglan Sweatshirt</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Sweatshirt</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 195</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Brushed Bomber</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Jackets</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 224</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp2.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Lite Sweatpants</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Pants</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 150</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp4.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Pink Fleece Sweatpants</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Pants</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 195</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/fp6.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Flex Sweatpants</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Pants</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 175</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default page