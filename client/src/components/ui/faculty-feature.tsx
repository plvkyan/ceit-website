import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FacultyFeatureProps {
    badge?: string;
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    image?: {
        src: string;
        alt: string;
    };
}

const FacultyFeature = ({
    badge = "Meet the Dean",
    heading = "Engr. Jordan Velasco",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id aliquam justo, et commodo magna. Cras eget dapibus lacus. Cras nibh risus, suscipit sed dictum id, finibus fringilla tortor.",
    buttons = {
        secondary: {
            text: "Read more",
            url: "https://www.ui.shadcn.com",
        },
    },
    image = {
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739240710/man-back_angle_hjb9yu.png",
        alt: "",
    },
}: FacultyFeatureProps) => {
    return (
        <section className="flex relative py-32 px-8 justify-center bg-dirtywhite overflow-hidden">

            <div className="absolute top-10 left-0 z-0 rounded-tr-[6rem] bg-primary lg:w-[36rem] lg:h-full" />

            <div className="container">

                <div className="grid items-center gap-8 lg:grid-cols-2">

                    <div className="relative">

                        <img
                            src={image.src}
                            alt={image.alt}
                            className="max-h-96 w-full rounded-md object-cover"
                        />

                    </div>

                    <div className="flex flex-col items-center z-49 text-center lg:items-start lg:text-left">

                        {badge && (
                            <p className="flex items-center text-primary text-lg font-bold uppercase">
                                {badge}
                            </p>
                        )}

                        <h1 className="my-4 text-pretty text-4xl font-bold lg:text-6xl">
                            {heading}
                        </h1>

                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                            {description}
                        </p>

                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full bg-dirtywhite border-black rounded-full sm:w-auto">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FacultyFeature;
