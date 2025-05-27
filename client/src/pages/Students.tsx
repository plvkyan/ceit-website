// Imports

// Component imports
// Footer component import
import Footer from "@/components/ui/footer";
// Navigation bar component import
import NavigationBar from "@/components/ui/navigation-bar";

// Utility imports
import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
    BookOpen,
    Users,
    HeartHandshake,
    GraduationCap,
    Calendar,
    ChevronRight,
    MapPin,
    Phone,
    Mail,
} from "lucide-react"
import { Badge } from "@/components/ui/badge";



// Students page component
const Students = () => {
    return (
        <>
            {/* Navigation bar component */}
            <NavigationBar />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10" />
                    <img
                        src="/placeholder.svg?height=600&width=1920"
                        width={1920}
                        height={700}
                        alt="University campus life"
                        className="w-full h-[250px] object-cover"
                    />
                    <div className="container relative z-20 mx-auto px-4 py-20 md:py-24">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Student Life</h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                Discover resources, programs, and opportunities designed to enrich your academic journey and personal
                                growth.
                            </p>
                            {/* <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90" asChild>
                <Link to="#guidance">Guidance & Counselling</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10" asChild>
                <Link to="#organizations">Student Organizations</Link>
              </Button>
            </div> */}
                        </div>
                    </div>
                </section>

                {/* Navigation Bar
      <section className="bg-slate-100 border-b sticky top-0 z-30">
        <div className="container mx-auto">
          <Tabs defaultValue="guidance" className="w-full">
            <TabsList className="h-16 w-full justify-start bg-transparent gap-2 px-4">
              <TabsTrigger
                value="guidance"
                className="data-[state=active]:bg-white rounded-none h-full border-b-2 border-transparent data-[state=active]:border-slate-900"
              >
                Guidance & Counselling
              </TabsTrigger>
              <TabsTrigger
                value="nstp"
                className="data-[state=active]:bg-white rounded-none h-full border-b-2 border-transparent data-[state=active]:border-slate-900"
              >
                NSTP
              </TabsTrigger>
              <TabsTrigger
                value="ojt"
                className="data-[state=active]:bg-white rounded-none h-full border-b-2 border-transparent data-[state=active]:border-slate-900"
              >
                OJT
              </TabsTrigger>
              <TabsTrigger
                value="organizations"
                className="data-[state=active]:bg-white rounded-none h-full border-b-2 border-transparent data-[state=active]:border-slate-900"
              >
                Organizations
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section> */}

                {/* Guidance and Counselling Section */}
                <section id="guidance" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                {/* <div className="inline-block bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-800 mb-4">
                                    Student Support
                                </div> */}
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Guidance & Counselling</h2>
                                <p className="text-lg text-slate-700 mb-6">
                                    Our Guidance and Counselling Center provides comprehensive support services to help you navigate
                                    academic challenges, personal concerns, and career decisions throughout your university journey.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-slate-100 p-2 rounded-full">
                                            <HeartHandshake className="h-5 w-5 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Personal Counselling</h3>
                                            <p className="text-slate-600">
                                                Confidential one-on-one sessions to address personal concerns and emotional well-being.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-slate-100 p-2 rounded-full">
                                            <BookOpen className="h-5 w-5 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Academic Guidance</h3>
                                            <p className="text-slate-600">
                                                Support for academic challenges, study skills, and educational planning.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-slate-100 p-2 rounded-full">
                                            <GraduationCap className="h-5 w-5 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Career Counselling</h3>
                                            <p className="text-slate-600">
                                                Assistance with career exploration, planning, and preparation for professional life.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="gap-2" asChild>
                                    <Link to="/guidance/appointment">
                                        Schedule an Appointment <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute -top-4 -left-4 w-full h-full bg-slate-200 rounded-lg"></div>
                                <img
                                    src="/placeholder.svg?height=500&width=600"
                                    width={600}
                                    height={500}
                                    alt="Counselling session"
                                    className="rounded-lg relative z-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* NSTP Section */}
                <section id="nstp" className="py-16 bg-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <Badge className="mb-8 bg-white" variant="outline">
                                Required Program
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">National Service Training Program (NSTP)</h2>
                            <p className="text-lg text-slate-700">
                                The NSTP aims to promote civic consciousness and defense preparedness among the youth while developing
                                their physical, moral, spiritual, intellectual, and social well-being.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                    <Users className="h-6 w-6 text-slate-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">ROTC</h3>
                                <p className="text-slate-600 mb-4">
                                    Reserve Officers' Training Corps focuses on military training, discipline, and leadership development.
                                </p>
                                <Link to="/nstp/rotc" className="text-slate-900 font-medium inline-flex items-center hover:underline">
                                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                    <HeartHandshake className="h-6 w-6 text-slate-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">CWTS</h3>
                                <p className="text-slate-600 mb-4">
                                    Civic Welfare Training Service focuses on activities that contribute to the general welfare and
                                    betterment of communities.
                                </p>
                                <Link to="/nstp/cwts" className="text-slate-900 font-medium inline-flex items-center hover:underline">
                                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                    <BookOpen className="h-6 w-6 text-slate-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">LTS</h3>
                                <p className="text-slate-600 mb-4">
                                    Literacy Training Service focuses on teaching literacy and numeracy skills to communities in need.
                                </p>
                                <Link to="/nstp/lts" className="text-slate-900 font-medium inline-flex items-center hover:underline">
                                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="bg-slate-800 text-white rounded-lg p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold mb-4">NSTP Registration Now Open</h3>
                                    <p className="mb-6">
                                        All first-year students are required to complete the NSTP program. Register for your preferred
                                        component before the deadline.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button className="bg-white text-slate-900 hover:bg-white/90" asChild>
                                            <Link to="/nstp/register">Register Now</Link>
                                        </Button>
                                        <Button variant="outline" className="text-white border-white/30 hover:bg-white/10" asChild>
                                            <Link to="/nstp/faq">Program FAQ</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="bg-slate-700 p-6 rounded-lg">
                                        <h4 className="font-medium mb-3">Important Dates</h4>
                                        <ul className="space-y-3">
                                            <li className="flex justify-between">
                                                <span>Registration Opens</span>
                                                <span className="font-medium">June 1, 2025</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Orientation</span>
                                                <span className="font-medium">June 15, 2025</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Classes Begin</span>
                                                <span className="font-medium">July 1, 2025</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* OJT Section */}
                <section id="ojt" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <Badge className="mb-4" variant="default">
                                    Career Development
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">On-The-Job Training (OJT)</h2>
                                <p className="text-lg text-slate-700 mb-6">
                                    Our OJT program provides valuable work experience in your field of study, helping you apply classroom
                                    knowledge to real-world situations and build professional connections.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-8">OJT Process</h3>
                                    <ol className="space-y-6 relative border-l border-slate-200 pl-6">
                                        <li className="relative">
                                            <div className="absolute -left-[25px] bg-slate-100 rounded-full p-1 border border-slate-200">
                                                <div className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                    1
                                                </div>
                                            </div>
                                            <h4 className="ml-12 font-semibold text-lg">Application & Eligibility Check</h4>
                                            <p className="ml-12 text-slate-600">
                                                Submit your OJT application and verify your eligibility with your department.
                                            </p>
                                        </li>
                                        <li className="relative">
                                            <div className="absolute -left-[25px] bg-slate-100 rounded-full p-1 border border-slate-200">
                                                <div className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                    2
                                                </div>
                                            </div>
                                            <h4 className="ml-12 font-semibold text-lg">Company Placement</h4>
                                            <p className="ml-12 text-slate-600">
                                                Get matched with partner companies or find your own placement with department approval.
                                            </p>
                                        </li>
                                        <li className="relative">
                                            <div className="absolute -left-[25px] bg-slate-100 rounded-full p-1 border border-slate-200">
                                                <div className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                    3
                                                </div>
                                            </div>
                                            <h4 className="ml-12 font-semibold text-lg">Training Period</h4>
                                            <p className="ml-12 text-slate-600">
                                                Complete required hours while maintaining regular check-ins with your faculty supervisor.
                                            </p>
                                        </li>
                                        <li className="relative">
                                            <div className="absolute -left-[25px] bg-slate-100 rounded-full p-1 border border-slate-200">
                                                <div className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                    4
                                                </div>
                                            </div>
                                            <h4 className="ml-12 font-semibold text-lg">Evaluation & Completion</h4>
                                            <p className="ml-12 text-slate-600">
                                                Submit final requirements and receive evaluation from both company and faculty supervisors.
                                            </p>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                            <div className="md:w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/placeholder.svg?height=300&width=300"
                                        width={300}
                                        height={300}
                                        alt="Student in office environment"
                                        className="rounded-lg w-full h-auto"
                                    />
                                    <img
                                        src="/placeholder.svg?height=300&width=300"
                                        width={300}
                                        height={300}
                                        alt="Students in training"
                                        className="rounded-lg w-full h-auto mt-8"
                                    />
                                    <img
                                        src="/placeholder.svg?height=300&width=300"
                                        width={300}
                                        height={300}
                                        alt="Student presentation"
                                        className="rounded-lg w-full h-auto"
                                    />
                                    <img
                                        src="/placeholder.svg?height=300&width=300"
                                        width={300}
                                        height={300}
                                        alt="Professional workplace"
                                        className="rounded-lg w-full h-auto mt-8"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center mt-12">
                            <Button className="gap-2" asChild>
                                <Link to="/ojt/opportunities">
                                    Browse OJT Opportunities <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                    </div>
                </section>

                {/* Student Organizations Section */}
                <section id="organizations" className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <Badge className="mb-4" variant="outline">
                                Campus Life
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Organizations & Activities</h2>
                            <p className="text-lg text-slate-700">
                                Engage with our vibrant community through various student organizations and activities that complement
                                your academic experience and help you develop leadership skills.
                            </p>
                        </div>

                        <div className="flex w-full justify-center items-center mb-16">
                            <Tabs defaultValue="academic" className="w-full">
                                <TabsList className="w-full justify-between bg-slate-100 p-1 mb-8">
                                    <TabsTrigger className="w-full" value="academic">Academic</TabsTrigger>
                                    <TabsTrigger className="w-full" value="cultural">Cultural</TabsTrigger>
                                    <TabsTrigger className="w-full" value="sports">Sports</TabsTrigger>
                                    <TabsTrigger className="w-full" value="service">Service</TabsTrigger>
                                    <TabsTrigger className="w-full" value="special">Special Interest</TabsTrigger>
                                </TabsList>

                                <TabsContent value="academic" className="mt-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <OrganizationCard
                                            name="Engineering Society"
                                            description="Promotes academic excellence and professional development in engineering disciplines."
                                            members="120+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Business Leaders Association"
                                            description="Develops future business leaders through networking, case competitions, and industry exposure."
                                            members="95+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Computer Science Club"
                                            description="Explores cutting-edge technologies through workshops, hackathons, and collaborative projects."
                                            members="80+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="cultural" className="mt-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <OrganizationCard
                                            name="Cultural Dance Troupe"
                                            description="Preserves and showcases traditional dances through performances and cultural events."
                                            members="45+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="University Choir"
                                            description="Performs choral music at university events and represents the school in competitions."
                                            members="60+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Theater Arts Guild"
                                            description="Produces plays and musicals while developing acting, directing, and production skills."
                                            members="50+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="sports" className="mt-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <OrganizationCard
                                            name="Varsity Basketball Team"
                                            description="Competes in intercollegiate basketball tournaments and promotes sportsmanship."
                                            members="25+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Swimming Club"
                                            description="Trains competitive swimmers and organizes swimming events for all skill levels."
                                            members="40+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Outdoor Adventure Club"
                                            description="Organizes hiking, camping, and outdoor activities to promote physical fitness and environmental awareness."
                                            members="65+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="service" className="mt-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <OrganizationCard
                                            name="Community Outreach Team"
                                            description="Coordinates volunteer opportunities and community service projects throughout the year."
                                            members="110+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Environmental Advocates"
                                            description="Promotes sustainability initiatives on campus and in the surrounding community."
                                            members="75+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Peer Tutoring Network"
                                            description="Provides free tutoring services to fellow students across various subjects."
                                            members="90+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="special" className="mt-0">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <OrganizationCard
                                            name="Photography Club"
                                            description="Explores photography techniques and organizes exhibitions of student work."
                                            members="55+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Debate Society"
                                            description="Develops public speaking and critical thinking skills through formal debates."
                                            members="40+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                        <OrganizationCard
                                            name="Culinary Arts Club"
                                            description="Explores diverse cuisines and cooking techniques through workshops and food events."
                                            members="65+ members"
                                            image="/placeholder.svg?height=200&width=400"
                                        />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-4">Upcoming Student Events</h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="min-w-16 h-16 bg-slate-100 rounded-lg flex flex-col items-center justify-center">
                                                <span className="text-sm font-medium text-slate-500">JUN</span>
                                                <span className="text-xl font-bold">15</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg">University Talent Show</h4>
                                                <p className="text-slate-600 mb-1">7:00 PM • Performing Arts Center</p>
                                                <Link
                                                    to="/events/talent-show"
                                                    className="text-slate-900 font-medium text-sm inline-flex items-center hover:underline"
                                                >
                                                    Learn more <ChevronRight className="h-3 w-3 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="min-w-16 h-16 bg-slate-100 rounded-lg flex flex-col items-center justify-center">
                                                <span className="text-sm font-medium text-slate-500">JUN</span>
                                                <span className="text-xl font-bold">22</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg">Leadership Summit</h4>
                                                <p className="text-slate-600 mb-1">9:00 AM • Student Union Building</p>
                                                <Link
                                                    to="/events/leadership-summit"
                                                    className="text-slate-900 font-medium text-sm inline-flex items-center hover:underline"
                                                >
                                                    Learn more <ChevronRight className="h-3 w-3 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="min-w-16 h-16 bg-slate-100 rounded-lg flex flex-col items-center justify-center">
                                                <span className="text-sm font-medium text-slate-500">JUL</span>
                                                <span className="text-xl font-bold">05</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg">Cultural Festival</h4>
                                                <p className="text-slate-600 mb-1">11:00 AM • Main Quad</p>
                                                <Link
                                                    to="/events/cultural-festival"
                                                    className="text-slate-900 font-medium text-sm inline-flex items-center hover:underline"
                                                >
                                                    Learn more <ChevronRight className="h-3 w-3 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-6" variant="outline" asChild>
                                        <Link to="/events">View All Events</Link>
                                    </Button>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-4">Start Your Own Organization</h3>
                                    <p className="text-slate-700 mb-6">
                                        Have a unique interest not represented by our current organizations? Start your own student group with
                                        the support of the Student Activities Office.
                                    </p>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>What are the requirements?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-slate-600">
                                                    You'll need at least 10 interested students, a faculty advisor, and a constitution outlining
                                                    your organization's purpose and structure.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>How do I apply?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-slate-600">
                                                    Submit an application to the Student Activities Office with your proposed organization details.
                                                    Applications are reviewed monthly by the Student Council.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>What support will I receive?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-slate-600">
                                                    Approved organizations receive funding allocation, meeting space, promotional support, and
                                                    leadership training for officers.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Button className="mt-6" asChild>
                                        <Link to="/organizations/start">Start an Organization</Link>
                                    </Button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Contact Section */}
                {/* <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto bg-slate-50 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h2 className="text-2xl font-bold mb-6">Student Affairs Office</h2>
                                    <p className="text-slate-700 mb-8">
                                        Have questions about student services, organizations, or programs? Our Student Affairs team is here to
                                        help.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-slate-700 mt-1" />
                                            <div>
                                                <h3 className="font-semibold">Location</h3>
                                                <p className="text-slate-600">Student Union Building, Room 203</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-slate-700 mt-1" />
                                            <div>
                                                <h3 className="font-semibold">Office Hours</h3>
                                                <p className="text-slate-600">Monday-Friday: 8:00 AM - 5:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="h-5 w-5 text-slate-700 mt-1" />
                                            <div>
                                                <h3 className="font-semibold">Phone</h3>
                                                <p className="text-slate-600">(555) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-5 w-5 text-slate-700 mt-1" />
                                            <div>
                                                <h3 className="font-semibold">Email</h3>
                                                <p className="text-slate-600">studentaffairs@university.edu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-8" asChild>
                                        <Link to="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                                <div className="md:w-1/2 bg-slate-800 p-8 md:p-12 text-white">
                                    <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Link to="/guidance" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>Counselling Services</span>
                                        </Link>
                                        <Link to="/nstp" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>NSTP Program</span>
                                        </Link>
                                        <Link to="/ojt" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>OJT Opportunities</span>
                                        </Link>
                                        <Link to="/organizations" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>Student Organizations</span>
                                        </Link>
                                        <Link to="/calendar" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>Events Calendar</span>
                                        </Link>
                                        <Link to="/handbook" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>Student Handbook</span>
                                        </Link>
                                        <Link to="/forms" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>Student Forms</span>
                                        </Link>
                                        <Link to="/faq" className="flex items-center gap-2 hover:underline">
                                            <ChevronRight className="h-4 w-4" />
                                            <span>FAQ</span>
                                        </Link>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-slate-700">
                                        <h3 className="font-semibold mb-4">Follow Us</h3>
                                        <div className="flex gap-4">
                                            <Link
                                                to="#"
                                                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"
                                            >
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"
                                            >
                                                <span className="sr-only">Instagram</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"
                                            >
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"
                                            >
                                                <span className="sr-only">YouTube</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            {/* Footer component */}
            <Footer />
        </>
    )
}

function OrganizationCard({ name, description, members, image }: {
    name: string;
    description: string;
    members: string;
    image: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/20 z-10" />
            <img
                src={image || "/placeholder.svg"}
                width={400}
                height={200}
                alt={name}
                className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="text-xs font-medium text-white/80 mb-1">{members}</div>
                <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{description}</p>
                <Button variant="link" className="text-white p-0 h-auto mt-2" asChild>
                    <Link to={`/organizations/${name.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn more <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}


export default Students;