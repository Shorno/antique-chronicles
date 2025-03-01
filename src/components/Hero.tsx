import HomeCarousel from "@/components/HomeCarousel.tsx";

export default function Hero() {
    return (
        <div className="lg:min-h-screen mt-20 sm:mt-32 bg-stone-100 dark:bg-gray-900 text-gray-100 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8 lg:px-0 lg:pt-12 lg:pb-0 lg:-mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center font-baskervville text-yellow-500 mb-6">
                    Welcome to the Antique Chronicles
                </h1>
                <p className="text-xl text-gray-900 dark:text-gray-100  md:text-4xl text-center mb-8 lg:mb-12 font-baskervville">Explore our collection of historical
                    artifacts</p>
            </div>

            <div className="w-full">
                <HomeCarousel/>
            </div>
        </div>

    )
}