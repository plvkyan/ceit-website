// Imports
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Feature {
  title: string;
  description: string;
  link?: string;
}

interface AnnouncementsFeatureProps {
  heading?: string;
  features?: Feature[];
}

const AnnouncementsFeature = ({
  heading = "News",
  features = [
    {
      title: "April Joy Yapcengco Ends Her Run with Grace, Grit, and Glory.",
      description:
        "The Pamantasan ng Lungsod ng Valenzuela's courts bids a triumphant and emotional farewell to one of its most iconic athletes—April Joy Yapcengco.",
      link: "/news/april-joy-yapcengco-ends-her-run-with-grace-grit-and-glory"
    },
    {
      title: "CEIT Shines Bright at PLV Intramurals 2025",
      description:
        "The PLV Intramurals 2025 officially wrapped up last April 21, bringing weeks of excitement, camaraderie, and competitive spirit across various sports.",
      link: "/news/ceit-shines-bright-at-plv-intramurals-2025"
    },
    {
      title: "PLV CEIT Celebrates New Civil Engineer Board Passers",
      description:
        "The College of Engineering and Information Technology proudly celebrates the success of its recent Civil Engineering graduates who passed the April 2025 Civil Engineering Licensure Examination.",
      link: "/news/plv-ceit-celebrates-new-civil-engineer-board-passers"
    },
  ],
}: AnnouncementsFeatureProps) => {

  const navigate = useNavigate();

  return (

    <section className="flex items-center justify-center py-32 px-8">

      <div className="container overflow-hidden">

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary uppercase">{heading}</h2>
        </div>

        <div className="relative mx-auto max-w-screen-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>

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
                {...(feature.link ? { onClick: () => navigate(feature.link!) } : {})}
              >
                <h3 className="mb-2 text-2xl line-clamp-2 font-semibold">{feature.title}</h3>
                <p className="text-sm line-clamp-3 text-muted-foreground italic">
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
