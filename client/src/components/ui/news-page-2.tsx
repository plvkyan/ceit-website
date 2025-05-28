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

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic my-6"> PLV CEIT Celebrates New Civil Engineer Board Passers: Forty Alumni Passes Their Licensure Exam </h1>

                <p className="text-muted-foreground mb-6">
                    Pamantasan ng Lungsod ng Valenzuela proudly congratulates its 40 new Civil Engineer board passers from the April 2025 Licensure Examination. The College of Engineering and Information Technology achieved an institutional passing rate of 46.51%, well above the national rate of 29.21%.
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
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748383089/PLV_Civil-Engineer-Licensure-Examination_otzpjx.jpg" alt=""
                />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />

                <p className="leading-7">
                    Pamantasan ng Lungsod ng Valenzuela proudly congratulates its 40 new Civil Engineer board passers from the April 2025 Licensure Examination. With an institutional passing rate of 46.51%, significantly higher than the national passing rate of 29.21%, PLV reaffirms its commitment to producing competent and board-ready engineers.
                </p>

                <div className="my-6" />

                <p className="leading-7">
                    This achievement is a testament to the quality of education, the dedication of faculty, and the perseverance of the students. The college continues to nurture future civil engineers who will help shape the infrastructure and development of the country.
                </p>

                <div className="mt-6 mb-6" />

                <p className="leading-7">
                    We salute your hard work, perseverance, and excellence. Congratulations, Engineers!
                </p>

                <div className="mt-6 mb-24" />

                <div className="w-[40px] h-[5px] bg-gray-300 my-12 mx-auto" />


            </div>

            <Footer />

        </section>
    );
};

export default NewsPage2;
