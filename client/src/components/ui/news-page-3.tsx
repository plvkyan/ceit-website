"use client";

import {
    AlignLeft,
    GalleryVerticalEnd,
    Lightbulb,
    ListChecks,
    RefreshCcw,
} from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "./navigation-bar";
import Footer from "./footer";
import { Avatar, AvatarFallback } from "./avatar";
import { Separator } from "./separator";

const NewsPage2 = () => {
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

            <div className="container max-w-[1080px] mx-auto px-4 py-8">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/news">News</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic my-6"> CEIT Shines Bright at PLV Intramurals 2025–PLV Intramurals 2025: A Celebration of Spirit and Sportsmanship </h1>

                <p className="text-muted-foreground mb-6">
                    The recently concluded PLV Intramurals 2025 was once again a celebration of camaraderie, competition, and college pride. Held over several days and featuring a variety of sports including basketball, volleyball, badminton, table tennis, chess, and even e-sports like Mobile Legends, the event brought together students from all departments in a spirited showcase of talent and teamwork.
                </p>

                <div className="flex items-center overflow-hidden my-6">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full text-muted-foreground">
                        <AvatarFallback className="rounded-lg text-lg">
                            KL
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-shrink-0">
                        <p className="text-base md:text-lg italic font-semibold ml-4"> Kyan Lumanog </p>
                        <p className="text-sm md:text-base text-muted-foreground ml-4">May 6, 2025</p>
                    </div>

                    <Separator className="w-full ml-6 sm:ml-16" />
                </div>

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />

                <img
                    className="max-h-[500px] mx-auto"
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748382870/PLV_Intramurals-Publication-Material_al8rd7.jpg" alt=""
                />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />

                <p className="leading-7">
                    Among the colleges, the College of Engineering and Information Technology (CEIT) stood out for its strong presence and sportsmanship. Both Engineering and IT athletes gave commendable performances across multiple events, earning notable finishes and gaining attention for their teamwork and determination.
                </p>

                <div className="my-6" />

                <p className="leading-7">
                    While the College of Business Administration officially took the overall championship, CEIT made an impressive impact—unofficially placing second (IT) and third (Engineering)—showing once again that the department is a force to be reckoned with.
                </p>

                <div className="mt-6 mb-6" />

                <p className="leading-7">
                    More than the medals and match results, it was CEIT’s unity, school spirit, and relentless support for one another that truly made a mark. The community came together not just as competitors, but as a family—loud, proud, and all-in from start to finish.
                </p>
                
                <div className="my-6" />

                <div className="leading-7">
                    Congratulations to all the student-athletes, coaches, and supporters for making PLV Intramurals 2025 a memorable success. CEIT, we’re proud of you!
                </div>

                <div className="my-6" />

                <div className="mt-6 mb-24" />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />


            </div>

            <Footer />

        </section>
    );
};

export default NewsPage2;
