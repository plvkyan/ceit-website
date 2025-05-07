// Imports

// Component Imports
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
import { Button } from "./button"
import { ArrowRight } from "lucide-react"



const Hero = () => {

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
                        <CarouselItem className="pl-0">
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-4 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col gap-4 w-[100%] px-16">
                                        <h1 className="uppercase text-white drop-shadow-lg text-2xl text-wrap md:text-pretty md:text-4xl lg:text-7xl">
                                            Latest Activity Headline 1
                                        </h1>
                                        <p className="mb-4 truncate md:text-pretty text-white drop-shadow-lg">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </p>
                                        <Button className="w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                <img
                                    className="w-full min-h-[400px] max-h-[600px] object-cover"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739648280/IT_Event_nbjc6w.png"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-0">
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-4 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col gap-4 w-[100%] px-16">
                                        <h1 className="uppercase text-white drop-shadow-lg text-2xl text-wrap md:text-pretty md:text-4xl lg:text-7xl">
                                            Latest Activity Headline 2
                                        </h1>
                                        <p className="mb-4 truncate md:text-pretty text-white drop-shadow-lg">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </p>
                                        <Button className="w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                <img
                                    className="w-full min-h-[400px] max-h-[600px] object-cover"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739648280/IT_Event_nbjc6w.png"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-0">
                            <div className="relative flex w-full items-center justify-center">
                                <div className="flex absolute items-center justify-center top-0 left-4 ms-auto me-auto w-full h-full z-50 bg-plvblue/60">
                                    <div className="container mt-32 md:mt-56 flex flex-col gap-4 w-[100%] px-16">
                                        <h1 className="uppercase text-white drop-shadow-lg text-2xl text-wrap md:text-pretty md:text-4xl lg:text-7xl">
                                            Latest Activity Headline 3
                                        </h1>
                                        <p className="mb-4 truncate md:text-pretty text-white drop-shadow-lg">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </p>
                                        <Button className="w-fit px-8 py-4 bg-transparent uppercase text-white border-2 border-white rounded-full" variant="outline">
                                            Read more 
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </div>
                                <img
                                    className="w-full min-h-[400px] max-h-[600px] object-cover"
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739648280/IT_Event_nbjc6w.png"
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