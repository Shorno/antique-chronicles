import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {motion} from "motion/react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
]
export default function HomeCarousel() {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full relative"
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-full">
                            <div className="lg:p-40 p-1">
                                <Card className="bg-gray-800 border-gray-700 rounded-sm">
                                    <CardContent
                                        className="flex aspect-[16/9] items-center justify-center lg:p-20 p-4 overflow-hidden">
                                        <motion.img
                                            src={src}
                                            alt={`Carousel image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            initial={{opacity: 0, scale: 1.1}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{duration: 0.7}}
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="absolute md:size-12 left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none">
                </CarouselPrevious>
                <CarouselNext
                    className="absolute md:size-12 right-4 top-1/2 -translate-y-1/2 bg-black/50  text-white border-none">
                </CarouselNext>
            </Carousel>
        </>
    )
}