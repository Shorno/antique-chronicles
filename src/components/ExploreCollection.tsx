import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronRight } from 'lucide-react'
import {Link} from "react-router";
import Egypt from "../assets/mummy_mask-teaser.webp"
import Animals from "../assets/southwark cat (1).webp"
import Americas from "../assets/maize god cut out.webp"
import Memory from "../assets/01461427_001_TIF.webp"
import Vassel from "../assets/hb_1999.276.jpg"

interface Category {
    title: string
    image: string
    link: string
}

const categories: Category[] = [
    {
        title: "Egypt",
        image: Egypt,
        link: "https://www.britishmuseum.org/collection/egypt"
    },
    {
        title: "Animals",
        image: Animals,
        link: "https://www.britishmuseum.org/collection/animals"
    },
    {
        title: "Americas",
        image: Americas,
        link: "https://www.britishmuseum.org/collection/americas"
    },
    {
        title: "Death and Memory",
        image: Memory,
        link: "https://www.britishmuseum.org/collection/death-and-memory"
    },
    {
        title : "Vessel in the Form of a Horn",
        image : Vassel,
        link : "https://www.metmuseum.org/toah/works-of-art/1999.276",
    }
]

export function ExploreCollection() {
    return (
        <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Explore the collection</h2>
                    <Link
                        to="/collection"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                        See all
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {categories.map((category, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Link target={"_blank"} to={category.link}>
                                    <div className="relative group overflow-hidden">
                                        <div className="aspect-[3/4] bg-gray-800">
                                            <img
                                                src={category.image}
                                                alt={category.title}
                                                className="w-full h-full p-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                            <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
                                                {category.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white border-none" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white border-none" />
                </Carousel>
            </div>
        </section>
    )
}

