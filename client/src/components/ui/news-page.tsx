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

const NewsPage1 = () => {
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

            <div className="container mx-auto px-4 py-8">

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

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic my-6"> April Joy Yapcengco Ends Her Run with Grace, Grit, and Glory: A Final Intramurals for the PLV Star </h1>

                <p className="text-muted-foreground mb-6">
                    Pamantasan ng Lungsod ng Valenzuela (PLV) bids a triumphant and emotional farewell to one of its most iconic athletes—April Joy Yapcengco, a senior Civil Engineering student whose name has become synonymous with sports excellence, leadership, and heart.
                </p>

                <div className="flex items-center overflow-hidden my-6">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-full text-muted-foreground">
                        <AvatarFallback className="rounded-lg text-lg">
                            KL
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-shrink-0">
                        <p className="text-base md:text-lg italic font-semibold ml-4"> Kyan Lumanog </p>
                        <p className="text-sm md:text-base text-muted-foreground ml-4">April 24, 2025</p>
                    </div>

                    <Separator className="w-full ml-6 sm:ml-16" />
                </div>

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />

                <img src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748381950/Yapcengco_PLV-Intramurals-2023-Championship_q9jjld.jpg" alt="" />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />

                <p className="leading-7">
                    This year’s Intramurals, which concluded last April 21, 2025, marked April Joy’s final appearance as a student-athlete, and she didn’t
                    leave without making another mark. She brought home a bronze medal in the Badminton Team Event, and once again earned a coveted spot in the
                    Women’s Basketball Mythical Five, while helping her team secure a 1st runner-up finish.
                </p>

                <div className="my-6" />

                <p className="leading-7">
                    But April Joy’s impact goes far beyond medals and trophies. For years, she has been a dominant force in Badminton, Basketball, and even Volleyball, racking
                    up titles and MVP awards with consistency and class. Her athletic résumé reads like a highlight reel:
                </p>

                <div className="my-6" />

                <ul className="flex flex-col ml-6 gap-3">

                    <li className="leading-7 my-2">
                        <strong>PLV Intramurals 2025</strong>
                        <ul className="ml-6">
                            <li>
                                - 1st Runner-Up in Women’s Basketball
                            </li>
                            <li>
                                - 2nd Runner-Up in Badminton Team Event
                            </li>
                            <li>
                                - Mythical Five Awardee in Women’s Basketball
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>SK Marulas Sports League 2024</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Badminton Mixed Doubles
                            </li>
                            <li>
                                - 2nd Runner-Up in Women's Basketball 3x3
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>PLV CEIT Palarong Pinoy 2024</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Women's Volleyball
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>SK Gen. T. De Leon Summer League 2023</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Badminton Mixed Doubles
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>PLV Intramurals 2023</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Women's Basketball
                            </li>
                            <li>
                                - Champion in Badminton Women's Doubles
                            </li>
                            <li>
                                - Mythical Five Awardee in Women’s Basketball
                            </li>
                            <li>
                                - Season MVP in Women’s Basketball
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>WES Olympics 2022</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Badminton Mixed Doubles
                            </li>
                        </ul>
                    </li>

                    <li className="leading-7 my-2">
                        <strong>PLV Intramurals 2020</strong>
                        <ul className="ml-6">
                            <li>
                                - Champion in Women's Basketball
                            </li>
                            <li>
                                - 1st Runner-Up in Badminton Women's Singles
                            </li>
                            <li>
                                - Mythical Five Awardee in Women’s Basketball
                            </li>
                            <li>
                                - Season MVP in Women’s Basketball
                            </li>
                        </ul>
                    </li>

                </ul>

                <div className="my-6" />

                <p className="leading-7">
                    Whether she was on the badminton court or the basketball court, April Joy
                    always played with passion, focus, and quiet confidence. Known not just for
                    her athletic abilities, but also for her warm presence and sportsmanship, she
                    quickly became one of the most admired athletes during every Intramurals
                    season—a familiar face many looked up to and rooted for.
                </p>
                
                <div className="my-6" />

                <p className="leading-7">
                    With graduation just around the corner, April Joy is set to close this chapter
                    of her PLV journey, leaving behind a legacy that will be hard to match. Her
                    success in sports mirrors her dedication to her Civil Engineering degree—a
                    balance that speaks volumes about her discipline and determination.
                </p>

                <div className="my-6" />

                <p className="leading-7">
                    <strong> Congratulations, April Joy Yapcengco! </strong> Thank you for giving us years of
                    unforgettable performances, team spirit, and heart. The College of Engineering
                    and Information Technology, and the entire PLV community, salute you.
                </p>

                <div className="my-6" />

                <p className="leading-7">
                    As the lights dim on your final Intramurals, your legacy continues to
                    shine—bright, inspiring, and unforgettable. 🌟
                </p>

                <div className="mt-6 mb-24" />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />


            </div>

            <Footer />

        </section>
    );
};

export default NewsPage1;
