// Imports
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
}

interface AnnouncementsFeatureProps {
  heading?: string;
  features?: Feature[];
}

const AnnouncementsFeature = ({
  heading = "News",
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
}: AnnouncementsFeatureProps) => {
  return (

    <section className="flex items-center justify-center py-32 px-8">

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

          {features.map((feature, index) => (
            <>

              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[1px] bg-slate-950 md:block"
                />
              )}

              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4 cursor-pointer"
              >
                <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground italic">
                  {feature.description}
                </p>
              </div>

            </>

          ))}

        </div>

        <div className="flex flex-col items-end gap-6">
          <Button variant="ghost" className="font-bold text-primary uppercase hover:bg-muted/50 hover:text-primary">
            View all news
            <ArrowRight />
          </Button>
        </div>

      </div>

    </section>

  );
};

export default AnnouncementsFeature;
