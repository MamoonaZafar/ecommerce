import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const jewellery = () => {
  return (
    <div className='mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]'>
        <div className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>
             <div className="flex w-full flex-col items-center justify-center pt-6">
                <div className="z-10 flex w-full flex-row">
                   <div className="hidden basis-7/12 xl:block"></div>
                   <div className="basis-full px-5 text-5xl font-bold leading-[55px] tracking-wide md:px-16 xl:basis-5/12 xl:px-0">Unique and Authentic Vintage Designer Jewellery</div>
                </div>
               <div className="z-0 -mt-[104px] flex w-full flex-col space-x-0 space-y-10 bg-[#eaeffa57] px-10 pb-10 pt-32 md:-mt-[56px] md:pt-24 xl:flex-row xl:space-x-10 xl:space-y-0">
                  <div className="relative flex basis-1/2 flex-col items-center justify-center space-y-8 text-[#212121]">
                    <div className="flex basis-1/2 flex-col justify-between space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
                <div className="flex basis-1/2 flex-col items-start justify-center">
                    <p className="text-lg font-semibold leading-4">Using Good Quality Materials</p>
                    <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className="flex basis-1/2 flex-col items-start justify-center">
                    <p className="text-lg font-semibold leading-4">100% Handmade Products</p>
                    <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="flex basis-1/2 flex-col justify-between space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
                <div className="flex basis-1/2 flex-col items-start justify-center">
                    <p className="text-lg font-semibold leading-4">Modern Fashion Design</p>
                    <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className="flex basis-1/2 flex-col items-start justify-center">
                    <p className="text-lg font-semibold leading-4">Discount for Bulk Orders</p>
                    <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="absolute inset-0 -z-40 flex items-center justify-center">
                <div className="text-[60px] font-bold text-gray-200 sm:text-[75px] sm:font-bold md:text-8xl md:font-extrabold">Different from others</div>
            </div>
          </div>
          <div className="flex basis-full flex-col items-center space-x-3 space-y-10 sm:flex-row sm:space-y-0 xl:basis-1/2 xl:items-stretch xl:space-x-8">
            <div className="flex basis-2/5 xl:basis-3/5">
                <Image src='/img/feature.png' alt='feature' width={325} height={400}></Image> 
            </div>
            <div className="flex basis-3/5 flex-col justify-between space-y-10 xl:basis-2/5">
                <p className="text-justify text-base font-light text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <Link href='/' className="z-40">
                    <Button className="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-primary-foreground hover:bg-primary/90 py-2 inline-flex h-10 w-auto space-x-2 bg-[#212121] px-8 focus-visible:bg-[#212121] sm:w-[50%] lg:h-20 lg:w-fit">See All Product</Button>
                </Link>
            </div>
          </div>
       </div>    
    </div>
  </div>
</div>
    
  )
}

export default jewellery