// Imports
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Carousel component imports
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"



interface Feature {
  title: string;
  description: string;
}

interface LatestEventsProps {
  heading?: string;
  features?: Feature[];
}

const LatestEventsFeature = ({
  heading = "Events",
  features = [
    {
      title: "Faculty evaluation by students is now available",
      description:
        "Schedules are posted...",
    },
    {
      title: "Capstone final defense schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Announcement heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ],
}: LatestEventsProps) => {
  return (

    <section className="bg-dirtywhite overflow-hidden flex relative items-center justify-center pb-24 lg:py-16 px-8">

      <div className="absolute -top-10 right-0 z-0 rounded-br-[6rem] bg-primary lg:w-[36rem] lg:h-full" />

      <div className="container overflow-hidden">

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary uppercase">{heading}</h2>
        </div>

        {/* <div className="relative mx-auto max-w-screen-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div> */}

        <div className="my-10 flex justify-between w-full flex-col md:flex-row">

          <Carousel
            className="w-full"
          >

            <CarouselContent className="flex md:p-8">

              <CarouselItem className="group pl-8 lg:basis-1/2 cursor-pointer">

                <div className="relative flex w-full items-center justify-center">

                  <div className="flex absolute items-center justify-center top-0 left-10.5 max-w-[300px] lg:max-w-[500px] aspect-square z-50 bg-gradient-to-t from-plvblue to-transparent">

                    <div className="mt-auto mb-8 lg:mb-12 flex flex-col gap-1 w-[100%] px-8 lg:px-16 transition-transform group-hover:-translate-y-6">

                      <h3 className="uppercase text-white drop-shadow-lg text-xl font-semibold text-wrap md:text-pretty">
                        Let's CAD and conquer happening now!
                      </h3>
                      <p className="truncate md:text-pretty text-sm font-light text-white italic drop-shadow-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <span className="text-white text-sm drop-shadow-lg">
                        December 10, 2024
                      </span>

                    </div>

                  </div>

                  <img
                    className="aspect-square max-w-[300px] lg:max-w-[500px] lg:max-h-full object-cover"
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739663723/CAD_EVENT_qmwalq.jpg"
                  />

                </div>

              </CarouselItem>

              <CarouselItem className="group pl-8 lg:basis-1/2 cursor-pointer">

                <div className="relative flex w-full items-center justify-center">

                  <div className="flex absolute items-center justify-center top-0 left-10.5 max-w-[300px] lg:max-w-[500px] aspect-square z-50 bg-gradient-to-t from-plvblue to-transparent">

                    <div className="mt-auto mb-8 lg:mb-12 flex flex-col gap-1 w-[100%] px-8 lg:px-16 transition-transform group-hover:-translate-y-6">

                      <h3 className="uppercase text-white drop-shadow-lg text-xl font-semibold text-wrap md:text-pretty">
                        Oplan Dagitab Happening Now!
                      </h3>
                      <p className="truncate md:text-pretty text-sm font-light text-white italic drop-shadow-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <span className="text-white text-sm drop-shadow-lg">
                        December 10, 2024
                      </span>

                    </div>

                  </div>

                  <img
                    className="aspect-square max-w-[300px] lg:max-w-[500px] lg:max-h-full object-cover"
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739663720/EE_EVENT_mlelt7.jpg"
                  />

                </div>

              </CarouselItem>

              <CarouselItem className="group pl-8 lg:basis-1/2 cursor-pointer">

                <div className="relative flex w-full items-center justify-center">

                  <div className="flex absolute items-center justify-center top-0 left-10.5 max-w-[300px] lg:max-w-[500px] aspect-square z-50 bg-gradient-to-t from-plvblue to-transparent">

                    <div className="mt-auto mb-8 lg:mb-12 flex flex-col gap-1 w-[100%] px-8 lg:px-16 transition-transform group-hover:-translate-y-6">

                      <h3 className="uppercase text-white drop-shadow-lg text-xl font-semibold text-wrap md:text-pretty">
                        PLV IT wins the Android IOT Category in UMAK 2024!
                      </h3>
                      <p className="truncate md:text-pretty text-sm font-light text-white italic drop-shadow-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <span className="text-white text-sm drop-shadow-lg">
                        December 10, 2024
                      </span>

                    </div>

                  </div>

                  <img
                    className="aspect-square max-w-[300px] lg:max-w-[500px] lg:max-h-full object-cover"
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739648280/IT_Event_nbjc6w.png"
                  />

                </div>

              </CarouselItem>


            </CarouselContent>

            {/* Carousel navigation */}
            <div className="flex absolute ms-auto me-auto -bottom-8 left-16 md:left-24 lg:left-36 md:bottom-0">
              {/* Carousel previous button */}
              <CarouselPrevious className="disabled:border-black/50 disabled:text-black/50 enabled:border-primary enabled:text-primary"/>
              {/* Carousel next button */}
              <CarouselNext className="disabled:border-black/50 disabled:text-black/50 enabled:border-primary enabled:text-primary"/>
            </div>

          </Carousel>

        </div>

        <div className="relative flex flex-col z-50 items-end mt-24 md:mt-0 gap-6">
          <Button variant="ghost" className="font-bold text-primary hover:text-primary hover:bg-muted-/50 lg:text-white uppercase lg:hover:bg-muted/20 lg:hover:text-white">
            View more events
            <ArrowRight />
          </Button>
        </div>

      </div>

    </section>

  );
};

export default LatestEventsFeature;
