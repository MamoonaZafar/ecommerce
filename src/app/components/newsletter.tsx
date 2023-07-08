import { Button } from "@/components/ui/button"

const newsletter = () => {
  return (
    <div className="mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[110px]">
        <div className="mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="mx-auto pt-6">
                <div className="relative">
                    <div className="flex flex-col items-center justify-center py-10">
                        <h3 className="mb-2 px-5 text-center text-3xl font-bold tracking-normal text-[#212121] sm:mb-4 sm:text-4xl">Subscribe Our Newsletter</h3>
                        <p className="mb-4 px-5 text-center text-base tracking-normal text-gray-700 sm:mb-8">Get the latest information and promo offers directly</p>
                        <div className="mx-auto flex w-full max-w-xl flex-col items-center space-x-0 space-y-3 px-1 sm:flex-row sm:space-x-3 sm:space-y-0 sm:px-5">
                            <input type="Email" placeholder="Email" className="flex h-10 w-full bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none border-[1px] border-gray-600 focus:rounded-md focus:border-black focus-visible:border-[2px] focus-visible:ring-0"></input>
                            <Button className="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-primary-foreground hover:bg-primary/90 h-10 py-2 inline-block w-auto whitespace-nowrap bg-[#212121] px-5 focus-visible:bg-[#212121]">Get Started</Button>
                            <div className="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-50 flex items-center justify-center">
                        <div className="text-[54px] font-bold text-gray-200 sm:text-8xl sm:font-extrabold">Newsletter</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default newsletter