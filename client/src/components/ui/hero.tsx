// Imports

// Component Imports
// Card component imports
import {
    Card,
    CardContent
} from "@/components/ui/card"
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



const Hero = () => {

    return (

        // Hero section
        <section className="flex py-8 px-8 justify-center">

            {/* Carousel container */}
            <div className="flex items-center">

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
                            delay: 2000,
                            // Continues autoplay even after interaction
                            stopOnInteraction: false,
                        }),
                    ]}
                >
                    {/* Carousel content */}
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-video w-full items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Carousel navigation */}
                    {/* Carousel previous button */}
                    <CarouselPrevious />
                    {/* Carousel next button */}
                    <CarouselNext />

                    {/* Carousel dots from an issue in shadcn GitHub */}
                    <CarouselDots className="py-4" />

                </Carousel>

            </div>

        </section>

    )
}

export default Hero;