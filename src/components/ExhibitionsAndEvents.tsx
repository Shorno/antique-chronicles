import {Link} from "react-router"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import SlickRoad from "../assets/Silk-Roads-teaser-2000x1159.webp"
import Image2 from "../assets/Hew_Locke_Souvenir_20_1920x1080.jpg"
import Image3 from "../assets/Picasso_teaser.jpg"

interface Exhibition {
    title: string
    subtitle?: string
    type: string
    startDate: string
    endDate: string
    image: string
    accentColor: string
    link: string
}

const exhibitions: Exhibition[] = [
    {
        title: "Silk Roads",
        type: "Exhibition",
        startDate: "26 September 2024",
        endDate: "23 February 2025",
        image: SlickRoad,
        accentColor: "amber",
        link: "/exhibitions/silk-roads"
    },
    {
        title: "Hew Locke",
        type: "Exhibition",
        startDate: "17 October 2024",
        endDate: "9 February 2025",
        image: Image2,
        accentColor: "green",
        link: "/exhibitions/hew-locke"
    },
    {
        title: "Picasso",
        type: "Exhibition",
        startDate: "7 November 2024",
        endDate: "30 March 2025",
        image: Image3,
        accentColor: "red",
        link: "/exhibitions/picasso"
    }
]

const accentColors = {
    amber: "bg-amber-500 hover:bg-amber-600",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-500 hover:bg-red-600"
}

export function ExhibitionsAndEvents() {
    return (
        <section className="bg-stone-100 dark:bg-gray-900 py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold">Global exhibitions and events</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exhibitions.map((exhibition, index) => (
                        <Card
                            key={index}
                            className=" dark:bg-gray-800 rounded-md dark:border-gray-700 overflow-hidden group"
                        >
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img
                                        src={exhibition.image}
                                        alt={exhibition.title}
                                        className="w-full aspect-[3/2] object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4">
                                        <p className="text-sm mb-1">{exhibition.type}</p>
                                        <h3 className={`text-2xl  font-bold mb-1`}>
                                            {exhibition.title}
                                        </h3>
                                    </div>
                                    <p>
                                        {exhibition.startDate} – {exhibition.endDate}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Link
                                    to={exhibition.link}
                                    className={`inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-white transition-colors ${accentColors[exhibition.accentColor as keyof typeof accentColors]}`}
                                >
                                    Book now
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

