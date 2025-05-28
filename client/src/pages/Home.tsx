// Imports

// Component imports
// Hero component import
import Hero from "@/components/ui/hero"
// Navigation bar component import
import AnnouncementsFeature from "@/components/ui/announcements-feature";
import FacultyFeature from "@/components/ui/faculty-feature";
import NavigationBar from "@/components/ui/navigation-bar"
import Organizations from "@/components/ui/organizations";
import Footer from "@/components/ui/footer";
import LatestEventsFeature from "@/components/ui/latest-events-feature";
import { useEffect } from "react";



const Home = () => {

    // Effects
    // Effect for changing page title
    useEffect(() => {
        document.title = "Home | Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology";
    }, []);

    return (

        <div>

            {/* Navigation bar component */}
            <NavigationBar />

            {/* Hero section component */}
            <Hero />
            {/* <div className="bg-white w-full h-[32rem]"></div> */}

            {/* Organizations section component */}
            <Organizations />

            <FacultyFeature />

            <AnnouncementsFeature />

            {/* <LatestEventsFeature /> */}

            <Footer />

        </div>

    )
}

export default Home;