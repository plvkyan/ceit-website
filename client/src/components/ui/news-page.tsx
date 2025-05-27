"use client";

import {
    AlignLeft,
    GalleryVerticalEnd,
    Lightbulb,
    ListChecks,
    RefreshCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "./navigation-bar";
import Footer from "./footer";

const NewsPage = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        const sections = Object.keys(sectionRefs.current);

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        let observer: IntersectionObserver | null = new IntersectionObserver(
            observerCallback,
            {
                root: null,
                rootMargin: "0px",
                threshold: 1,
            },
        );

        sections.forEach((sectionId) => {
            const element = sectionRefs.current[sectionId];
            if (element) {
                observer?.observe(element);
            }
        });

        return () => {
            observer?.disconnect();
            observer = null;
        };
    }, []);

    const addSectionRef = (id: string, ref: HTMLElement | null) => {
        if (ref) {
            sectionRefs.current[id] = ref;
        }
    };

    return (
        <section>

            <NavigationBar />
            
            <div className="max-w-screen-xl mt-16 mx-auto">
                <div className="relative grid-cols-4 gap-20 lg:grid">
                    <div className="lg:col-span-3">
                        <div>
                            <Badge variant="outline">Tag goes here</Badge>
                            <h1 className="mt-3 text-4xl font-extrabold">
                                Headline goes here
                            </h1>
                            <p className="mt-2 text-lg text-muted-foreground">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eveniet iusto obcaecati odio natus inventore minima possimus dolores. Magni fugit autem voluptates, magnam eius architecto pariatur sapiente vero itaque dolore.
                            </p>
                            <img
                                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                                alt="placeholder"
                                className="my-8 aspect-video w-full rounded-md object-cover"
                            />
                        </div>
                        <section
                            id="section1"
                            ref={(ref) => addSectionRef("section1", ref)}
                            className="prose mb-8"
                        >
                            <h2 className="text-3xl mt-4 mb-6">Heading goes here</h2>
                            <div className="ml-3.5">
                                <div className="relative flex items-start pb-2">
                                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                    <div className="absolute ml-[-14px] py-2">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                            <RefreshCcw className="h-3.5 w-3.5" />
                                        </div>
                                    </div>
                                    <div className="pl-12">
                                        <h3 className="mt-2 text-base font-semibold">
                                            First topic
                                        </h3>
                                        <p className="my-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum itaque cumque sequi? Inventore accusamus qui incidunt laborum libero nemo dolore quis consequuntur aliquid itaque! In nobis beatae praesentium sed!
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start pb-2">
                                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                    <div className="absolute ml-[-14px] py-2">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                            <GalleryVerticalEnd className="h-3.5 w-3.5" />
                                        </div>
                                    </div>
                                    <div className="pl-12">
                                        <h3 className="mt-2 text-base font-semibold">
                                            Second topic
                                        </h3>
                                        <p className="my-4">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ratione corporis sit unde delectus nesciunt dolores quo iusto quibusdam sequi dolorum obcaecati aut facilis natus architecto omnis atque veritatis quis.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start pb-2">
                                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                    <div className="absolute ml-[-14px] py-2">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                            <ListChecks className="h-3.5 w-3.5" />
                                        </div>
                                    </div>
                                    <div className="pl-12">
                                        <h3 className="mt-2 text-base font-semibold">
                                            Third topic
                                        </h3>
                                        <p className="my-4">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit enim, temporibus fugit omnis eligendi at qui quaerat voluptate ex adipisci, dicta repellendus accusantium, et labore. Neque nihil recusandae dignissimos perspiciatis?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            id="section2"
                            ref={(ref) => addSectionRef("section2", ref)}
                            className="prose mb-8"
                        >
                            <h2 className="text-3xl mt-4 mb-6">Another heading here</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatem obcaecati, corrupti deserunt laboriosam rerum dolore excepturi sapiente, quam provident, cumque facere officia modi. Numquam recusandae voluptas optio laboriosam eos?
                            </p>
                            <div className="my-6 w-full overflow-y-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="m-0 border-t p-0 even:bg-muted">
                                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">Table heading 1</th>
                                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">Table heading 2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="m-0 border-t p-0 even:bg-muted">
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 1</td>
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 2</td>
                                        </tr>
                                        <tr className="m-0 border-t p-0 even:bg-muted">
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 3</td>
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 4</td>
                                        </tr>
                                        <tr className="m-0 border-t p-0 even:bg-muted">
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 5</td>
                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Table Data 6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur, earum itaque quo veritatis porro facere nihil perspiciatis quia adipisci tenetur eaque? Repellat autem aspernatur laboriosam reiciendis eveniet nam vero!
                            </p>
                            <Alert className="my-6">
                                <Lightbulb className="h-4 w-4" />
                                <AlertTitle>Sample Alert</AlertTitle>
                                <AlertDescription>
                                    Template lang po talaga for news articles.
                                </AlertDescription>
                            </Alert>
                        </section>

                        <section
                            id="section3"
                            ref={(ref) => addSectionRef("section3", ref)}
                            className="prose mb-8"
                        >
                            <h2 className="text-3xl mt-4 mb-6">More headings?!</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore nesciunt <span className="underline"> consequuntur laborum voluptatibus minima </span> voluptatum. Officia, eligendi voluptatem esse necessitatibus ipsam dolores magnam veniam. Architecto fuga nihil iure enim?
                                
                            </p>
                            <blockquote className="my-4 border-l-4 pl-6 py-4 italic">
                                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in nostrum ex tempora, asperiores atque ea dicta soluta, quae harum magnam ipsa vel veniam, eius odit totam corporis iste? Incidunt?&rdquo;
                            </blockquote>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim laborum atque minima hic aspernatur, numquam beatae excepturi dolore ipsum accusamus assumenda! Assumenda animi repellat ea non temporibus quae, deserunt architecto.
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>1st level</li>
                                <li>2nd level</li>
                                <li>3rd level</li>
                            </ul>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi obcaecati deleniti et ipsa minus voluptatibus delectus expedita error. Nisi esse unde ut labore, asperiores neque eos corrupti vero quia!
                            </p>
                        </section>
                    </div>
                    <div className="sticky top-32 hidden h-fit lg:block">
                        <span className="flex items-center gap-2 text-sm">
                            <AlignLeft className="h-4 w-4" />
                            Table of Contents kinda thing
                        </span>
                        <nav className="mt-2 text-sm">
                            <ul>
                                <li>
                                    <a
                                        href="#section1"
                                        className={cn(
                                            "block py-1 transition-colors duration-200",
                                            activeSection === "section1"
                                                ? "font-medium text-primary"
                                                : "text-muted-foreground hover:text-primary",
                                        )}
                                    >
                                        First part
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#section2"
                                        className={cn(
                                            "block py-1 transition-colors duration-200",
                                            activeSection === "section2"
                                                ? "font-medium text-primary"
                                                : "text-muted-foreground hover:text-primary",
                                        )}
                                    >
                                        Second part
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#section3"
                                        className={cn(
                                            "block py-1 transition-colors duration-200",
                                            activeSection === "section3"
                                                ? "font-medium text-primary"
                                                : "text-muted-foreground hover:text-primary",
                                        )}
                                    >
                                        Third part
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default NewsPage;
