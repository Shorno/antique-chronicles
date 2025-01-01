import HomeCarousel from "@/components/HomeCarousel.tsx";

export default function Hero() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="container mx-auto px-4 py-8 lg:px-0 lg:pt-12 lg:pb-0 lg:-mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center font-baskervville text-yellow-500 mb-6">
                    Welcome to the Antique Chronicles
                </h1>
                <p className="text-xl text-center mb-8 lg:mb-12 font-baskervville">Explore our collection of historical
                    artifacts</p>
            </div>

            <div className="w-full mb-12">
                <HomeCarousel/>
            </div>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-6">About Our Collection</h2>
                    <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
                        Our museum houses a diverse array of historical artifacts, each telling a unique story of human
                        civilization.
                        From ancient tools to modern art, our collection spans millennia of human creativity and
                        innovation.
                        We invite you to journey through time and explore the rich tapestry of our shared cultural
                        heritage.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Featured Exhibitions</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Ancient Egyptian Treasures</li>
                            <li>Greek and Roman Sculptures</li>
                            <li>Medieval Weaponry</li>
                            <li>Renaissance Art and Artifacts</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Upcoming Events</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Guided Tours: Every Saturday at 2 PM</li>
                            <li>Children's Workshop: Ancient Pottery - July 15</li>
                            <li>Lecture Series: Lost Civilizations - August 3-5</li>
                            <li>Special Exhibition: The Silk Road - Opening September 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}