import Link from "next/link"
import Image from "next/image"


const page = () => {
  return (
    <div className="mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]">
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
      <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/mp.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Raglan Sweatshirt</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ SweatShirt</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 195</h4>
          </div>
        </Link>
        <Link href='' className="cursor-pointer">
          <div>
            <div>
              <Image src='/img/mp2.png' alt='product' width={600} height={600} className="h-[291px] w-[275px]  bg-blue-100 object-cover"></Image>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Flex Push Button Bomber</h2>
            <h3 className="text-md mt-1 font-semibold text-gray-500">$ Jackets</h3>
            <h4 className="mt-2 text-lg font-semibold">$ 224</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default page