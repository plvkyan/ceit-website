// Imports

// Component imports
// Hero component import
// import Hero from "@/components/ui/hero"
// Navigation bar component import
import NavigationBar from "@/components/ui/navigation-bar"
import Organizations from "@/components/ui/organizations";



const Home = () => {

    return (

        <div>

            {/* Navigation bar component */}
            <NavigationBar />

            {/* Hero section component */}
            {/* <Hero /> */}
            <div className="bg-white w-full h-[32rem]"></div>

            {/* Organizations section component */}
            <Organizations />

            
        </div>

    )
}

export default Home;