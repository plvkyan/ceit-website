// Imports

// Lucide Icon imports
import { ArrowRight } from "lucide-react"

// Component Imports
// Button component imports
import { Button } from "@/components/ui/button"

// Carousel component imports
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Utility imports
// Autoplay embla carousel import
import Autoplay from "embla-carousel-autoplay"

import { useNavigate } from "react-router-dom"


const Hero = () => {

    const navigate = useNavigate();

    return (

        // Hero section
        <section className="flex justify-center">

            {/* Carousel container */}
            <div className="flex w-full items-center">

                {/* Carousel itself, duh */}
                <Carousel
                    className="w-full"
                    // Option to loop the carousel
                    opts={{
                        loop: true,
                    }}
                    // Plugin to autoplay the carousel
                    plugins={[
                        Autoplay({
                            delay: 5000,
                            stopOnMouseEnter: true,
                            // Continues autoplay even after interaction
                            stopOnInteraction: false,
                        }),
                    ]}
                >

                    {/* Carousel navigation */}
                    {/* Carousel previous button */}
                    <CarouselPrevious className="hidden absolute me-auto left-5 z-50 md:flex" />
                    {/* Carousel next button */}
                    <CarouselNext className="hidden absolute ms-auto right-5 z-50 md:flex" />

                    {/* Carousel content */}
                    <CarouselContent className="cursor-pointer">
                        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
                        <CarouselItem className="pl-0" onClick={() => navigate("/news/april-joy-yapcengco-ends-her-run-with-grace-grit-and-glory")}>
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-0 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col sm:gap-4 w-[100%] px-12 sm:px-16">
                                        <h1 className="z-10 line-clamp-3 text-white drop-shadow-lg text-lg md:text-pretty md:text-4xl lg:text-5xl">
                                            April Joy Yapcengco ends her run with grace, grit, and glory
                                        </h1>
                                        <p className="z-10 mb-4 line-clamp-2 md:text-pretty text-white drop-shadow-lg">
                                            The Pamantasan ng Lungsod ng Valenzuela's courts bids a triumphant and emotional farewell to one of its most iconic athletes—April Joy Yapcengco.
                                        </p>
                                        <Button size="default" className="z-10 w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#162B60]" />
                                <img
                                    className="w-full min-h-[400px] max-h-[600px] object-cover"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748381950/Yapcengco_PLV-Intramurals-2023-Championship_q9jjld.jpg"
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="pl-0">
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-4 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col sm:gap-4 w-[100%] px-12 sm:px-16">
                                        <h1 className="z-10 line-clamp-3 text-white drop-shadow-lg text-lg md:text-pretty md:text-4xl lg:text-5xl">
                                            CEIT shines bright at PLV Intramurals 2025
                                        </h1>
                                        <p className="z-10 mb-4 line-clamp-2 md:text-pretty text-white drop-shadow-lg">
                                            The PLV Intramurals 2025 officially wrapped up last April 21, bringing weeks of excitement, camaraderie, and competitive spirit across various sports.
                                        </p>
                                        <Button className="z-10 w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#162B60]" />
                                <img
                                    className="w-full min-h-[400px] max-h-[600px] object-cover"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748382870/PLV_Intramurals-Publication-Material_al8rd7.jpg"
                                />
                            </div>
                        </CarouselItem>
                        
                        <CarouselItem className="pl-0">
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-4 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col sm:gap-4 w-[100%] px-12 sm:px-16">
                                        <h1 className="z-10 line-clamp-3 text-white drop-shadow-lg text-lg md:text-pretty md:text-4xl lg:text-5xl">
                                            PLV CEIT celebrates new civil engineer board passers
                                        </h1>
                                        <p className="z-10 mb-4 line-clamp-2 md:text-pretty text-white drop-shadow-lg">
                                            The College of Engineering and Information Technology proudly celebrates the success of its recent Civil Engineering graduates who passed the April 2025 Civil Engineering Licensure Examination.
                                        </p>
                                        <Button className="sm:flex z-10 w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#162B60]" />
                                <img
                                    className="w-full min-h-[400px] max-h-[400px] md:max-h-[550px] lg:max-h-[600px] object-cover object-[35%_75%]"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748383089/PLV_Civil-Engineer-Licensure-Examination_otzpjx.jpg"
                                />
                            </div>
                        </CarouselItem>
                        {/* ))} */}
                    </CarouselContent>

                    {/* Carousel dots from an issue in shadcn GitHub */}
                    <CarouselDots className="py-4 md:py-8" />

                </Carousel>

            </div>

        </section>

    )
}

export default Hero;