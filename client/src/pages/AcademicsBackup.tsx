// Imports

// Component imports
// Footer component import
import Footer from "@/components/ui/footer";
// Navigation bar component import
import NavigationBar from "@/components/ui/navigation-bar";

import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Calendar, ArrowRight, Building, FileText } from "lucide-react"



// Academics page component
const Academics = () => {



    return (
        <>
            {/* Navigation bar component */}
            <NavigationBar />

            {/* Main content */}
            <div className="bg-white">
                {/* Hero Section - Clean and minimal */}
                <section className="relative bg-[#f5f5f5] py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e1e1e]">Academics</h1>
                            <p className="text-xl text-[#444444] max-w-2xl">
                                Discover our programs designed to inspire, challenge, and prepare you for success in a rapidly
                                changing world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Administration and Registrar Section */}
                <section className="py-16 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* <div>
                            <div className="flex items-center mb-6">
                                <Building className="h-6 w-6 mr-3 text-[#8a1538]" />
                                <h2 className="text-2xl font-semibold">Administration</h2>
                            </div>
                            <Separator className="mb-6" />

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-medium mb-2">Office of the Provost</h3>
                                    <p className="text-[#444444] mb-3">
                                        The Office of the Provost oversees all academic programs and faculty affairs, ensuring excellence in
                                        teaching, research, and scholarship.
                                    </p>
                                    <div className="flex items-center text-sm text-[#666666]">
                                        <span className="font-medium mr-2">Dr. Eleanor Mitchell, Provost</span>
                                        <span className="mx-2">•</span>
                                        <span>provost@university.edu</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">Academic Affairs</h3>
                                    <p className="text-[#444444] mb-3">
                                        Academic Affairs coordinates curriculum development, academic policies, and faculty development across
                                        all schools and departments.
                                    </p>
                                    <div className="flex items-center text-sm text-[#666666]">
                                        <span className="font-medium mr-2">Dr. Marcus Chen, Vice Provost</span>
                                        <span className="mx-2">•</span>
                                        <span>academic.affairs@university.edu</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">Faculty Senate</h3>
                                    <p className="text-[#444444] mb-3">
                                        The Faculty Senate represents faculty interests in university governance and academic policy
                                        decisions.
                                    </p>
                                    <Link
                                        to="/academics/faculty-senate"
                                        className="text-[#8a1538] hover:underline inline-flex items-center"
                                    >
                                        Learn more about Faculty Senate <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        <div className="md:col-span-2">
                            <div className="flex items-center mb-6">
                                <FileText className="h-6 w-6 mr-3 text-[#8a1538]" />
                                <h2 className="text-2xl font-semibold">Registrar's Office</h2>
                            </div>
                            <Separator className="mb-6" />

                            <div className="space-y-6">
                                <p className="text-[#444444]">
                                    The Registrar's Office maintains academic records, coordinates course registration, and ensures the
                                    integrity of academic policies and procedures.
                                </p>

                                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                                    <h3 className="text-lg font-medium mb-4">Services</h3>
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                                ✓
                                            </div>
                                            <span>Course Registration & Add/Drop</span>
                                        </li>
                                        <li className="flex">
                                            <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                                ✓
                                            </div>
                                            <span>Transcript Requests</span>
                                        </li>
                                        <li className="flex">
                                            <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                                ✓
                                            </div>
                                            <span>Degree Verification</span>
                                        </li>
                                        <li className="flex">
                                            <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                                ✓
                                            </div>
                                            <span>Academic Calendar Management</span>
                                        </li>
                                        <li className="flex">
                                            <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                                ✓
                                            </div>
                                            <span>Graduation Processing</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="bg-[#8a1538] hover:bg-[#6a102b]" asChild>
                                        <Link to="/academics/registrar/student-portal">Student Portal</Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link to="/academics/registrar/forms">Forms & Resources</Link>
                                    </Button>
                                </div>

                                <div className="mt-4 text-sm text-[#666666]">
                                    <p className="font-medium">Contact Information:</p>
                                    <p>Phone: (555) 123-4567</p>
                                    <p>Email: registrar@university.edu</p>
                                    <p>Location: Administration Building, Room 102</p>
                                    <p>Hours: Monday-Friday, 8:30 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Calendar - Minimalist design */}
                <section className="py-16 bg-[#f5f5f5]">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center mb-10">
                            <Calendar className="h-6 w-6 mr-3 text-[#8a1538]" />
                            <h2 className="text-2xl font-semibold">Academic Calendar</h2>
                        </div>

                        <Tabs defaultValue="fall" className="w-full">
                            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                                <TabsTrigger value="fall">Fall 2023</TabsTrigger>
                                <TabsTrigger value="spring">Spring 2024</TabsTrigger>
                                <TabsTrigger value="summer">Summer 2024</TabsTrigger>
                            </TabsList>

                            <TabsContent value="fall" className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Classes Begin</h3>
                                            <p className="text-[#666666]">First day of instruction</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">August 28, 2023</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Add/Drop Deadline</h3>
                                            <p className="text-[#666666]">Last day to add or drop courses</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">September 11, 2023</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Mid-term Break</h3>
                                            <p className="text-[#666666]">No classes</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">October 16-20, 2023</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Thanksgiving Break</h3>
                                            <p className="text-[#666666]">No classes</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">November 23-24, 2023</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Last Day of Classes</h3>
                                            <p className="text-[#666666]">Final day of instruction</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">December 8, 2023</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Final Exams</h3>
                                            <p className="text-[#666666]">Examination period</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">December 11-15, 2023</span>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button variant="outline" asChild>
                                        <Link to="/academics/calendar">View Complete Calendar</Link>
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="spring" className="bg-white p-6 rounded-lg shadow-sm">
                                {/* Similar structure to Fall semester */}
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Classes Begin</h3>
                                            <p className="text-[#666666]">First day of instruction</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">January 16, 2024</span>
                                    </div>

                                    {/* Additional dates would go here */}

                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Commencement</h3>
                                            <p className="text-[#666666]">Graduation ceremony</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">May 18, 2024</span>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button variant="outline" asChild>
                                        <Link to="/academics/calendar">View Complete Calendar</Link>
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="summer" className="bg-white p-6 rounded-lg shadow-sm">
                                {/* Summer semester dates */}
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                                        <div>
                                            <h3 className="font-medium">Summer Session Begins</h3>
                                            <p className="text-[#666666]">First day of instruction</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">May 20, 2024</span>
                                    </div>

                                    {/* Additional dates would go here */}

                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Summer Session Ends</h3>
                                            <p className="text-[#666666]">Last day of instruction</p>
                                        </div>
                                        <span className="font-medium text-[#8a1538] mt-2 md:mt-0">July 26, 2024</span>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button variant="outline" asChild>
                                        <Link to="/academics/calendar">View Complete Calendar</Link>
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Academic Programs - Engineering Focus */}
                <section className="py-16 container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <GraduationCap className="h-10 w-10 mx-auto mb-4 text-[#8a1538]" />
                        <h2 className="text-3xl font-bold mb-4">Engineering Programs</h2>
                        <p className="text-lg text-[#444444]">
                            Our engineering programs combine rigorous technical education with hands-on experience, preparing students
                            to solve complex problems and lead innovation.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Civil Engineering */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl font-semibold mb-4">Civil Engineering</h3>
                                <p className="text-[#444444] mb-6">
                                    Our Civil Engineering program prepares students to design, build, and maintain the infrastructure that
                                    supports modern society—from bridges and buildings to water systems and transportation networks.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Structural Engineering</span>
                                            <p className="text-sm text-[#666666]">Design of buildings, bridges, and other structures</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Environmental Engineering</span>
                                            <p className="text-sm text-[#666666]">Water resources, waste management, and sustainability</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Transportation Systems</span>
                                            <p className="text-sm text-[#666666]">Highway design, traffic management, and urban planning</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="bg-[#8a1538] hover:bg-[#6a102b]" asChild>
                                    <Link to="/academics/engineering/civil">Explore Civil Engineering</Link>
                                </Button>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Civil engineering students working on a bridge design project"

                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Electrical Engineering */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="order-2">
                                <h3 className="text-2xl font-semibold mb-4">Electrical Engineering</h3>
                                <p className="text-[#444444] mb-6">
                                    Our Electrical Engineering program focuses on the study and application of electricity, electronics, and
                                    electromagnetism, preparing students for careers in power systems, telecommunications, and electronics
                                    design.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Power Systems</span>
                                            <p className="text-sm text-[#666666]">
                                                Generation, transmission, and distribution of electrical power
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Electronics and Embedded Systems</span>
                                            <p className="text-sm text-[#666666]">Circuit design, microprocessors, and control systems</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Telecommunications</span>
                                            <p className="text-sm text-[#666666]">Wireless systems, networking, and signal processing</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="bg-[#8a1538] hover:bg-[#6a102b]" asChild>
                                    <Link to="/academics/engineering/electrical">Explore Electrical Engineering</Link>
                                </Button>
                            </div>

                            <div className="order-1">
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Electrical engineering laboratory with students working on circuit design"

                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Information Technology */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl font-semibold mb-4">Information Technology</h3>
                                <p className="text-[#444444] mb-6">
                                    Our Information Technology program equips students with the skills to design, implement, and manage
                                    computing systems and networks that power modern organizations.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Software Development</span>
                                            <p className="text-sm text-[#666666]">Programming, web development, and application design</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Network Administration</span>
                                            <p className="text-sm text-[#666666]">Network design, security, and management</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-[#8a1538]/10 flex items-center justify-center text-[#8a1538] mr-3 mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <span className="font-medium">Cybersecurity</span>
                                            <p className="text-sm text-[#666666]">Threat analysis, security protocols, and digital forensics</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="bg-[#8a1538] hover:bg-[#6a102b]" asChild>
                                    <Link to="/academics/engineering/information-technology">Explore Information Technology</Link>
                                </Button>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="IT students collaborating on a software development project"

                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty and Research - Simple design */}
                <section className="py-16 bg-[#f5f5f5]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto mb-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Faculty & Research</h2>
                            <p className="text-lg text-[#444444]">
                                Our distinguished faculty are leaders in their fields, conducting groundbreaking research and providing
                                exceptional mentorship to students.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Professor working with students in a civil engineering laboratory"

                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Civil Engineering Research</h3>
                                <p className="text-[#444444] mb-4">
                                    Our faculty are pioneering sustainable infrastructure solutions, resilient design for natural disasters,
                                    and advanced materials for construction.
                                </p>
                                <Link
                                    to="/academics/research/civil"
                                    className="text-[#8a1538] hover:underline inline-flex items-center"
                                >
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="bg-white p-6 rounded-lg">
                                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Electrical engineering research laboratory with advanced equipment"

                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Electrical Engineering Research</h3>
                                <p className="text-[#444444] mb-4">
                                    Research initiatives include renewable energy systems, advanced semiconductor devices, and
                                    next-generation wireless communications.
                                </p>
                                <Link
                                    to="/academics/research/electrical"
                                    className="text-[#8a1538] hover:underline inline-flex items-center"
                                >
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="bg-white p-6 rounded-lg">
                                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="IT research focusing on cybersecurity and data analytics"

                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">IT Research Initiatives</h3>
                                <p className="text-[#444444] mb-4">
                                    Our IT faculty lead research in artificial intelligence, cybersecurity, cloud computing, and
                                    human-computer interaction.
                                </p>
                                <Link to="/academics/research/it" className="text-[#8a1538] hover:underline inline-flex items-center">
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Clean and minimal */}
                <section className="py-16 container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b">
                                <AccordionTrigger className="text-left py-4">How do I declare an engineering major?</AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-[#444444]">
                                        Students typically declare their engineering major during their sophomore year after completing the
                                        required prerequisite courses. To declare, schedule an appointment with an academic advisor in your
                                        desired department, complete the Major Declaration Form, and submit it to the Registrar's Office. Some
                                        engineering programs have specific GPA requirements and prerequisite courses that must be completed
                                        before declaration.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b">
                                <AccordionTrigger className="text-left py-4">
                                    What academic support services are available for engineering students?
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-[#444444]">
                                        Engineering students have access to specialized academic support services including the Engineering
                                        Tutoring Center, which offers peer tutoring for core engineering courses; the Math and Science
                                        Learning Center; academic advisors dedicated to engineering programs; and faculty office hours.
                                        Additionally, the Engineering Student Success Center provides career counseling, internship placement
                                        assistance, and professional development workshops.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b">
                                <AccordionTrigger className="text-left py-4">
                                    Are there research opportunities for undergraduate students?
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-[#444444]">
                                        Yes, we offer numerous research opportunities for undergraduate students through the Undergraduate
                                        Research Program. Students can work directly with faculty on ongoing research projects, apply for
                                        summer research fellowships, or develop independent research projects with faculty mentorship. Many
                                        engineering departments also offer research-for-credit courses that allow students to earn academic
                                        credit while gaining valuable research experience.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-b">
                                <AccordionTrigger className="text-left py-4">
                                    What internship opportunities are available?
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-[#444444]">
                                        Our Engineering Career Center facilitates internship placements with industry partners ranging from
                                        local firms to global corporations. Many students complete internships during the summer, though co-op
                                        programs that alternate academic semesters with full-time work experience are also available. The
                                        annual Engineering Career Fair brings over 200 employers to campus specifically seeking engineering
                                        talent for internships and full-time positions.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-b">
                                <AccordionTrigger className="text-left py-4">
                                    How can I get involved in student engineering organizations?
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-[#444444]">
                                        We have over 30 student engineering organizations including discipline-specific societies (like the
                                        American Society of Civil Engineers), competition teams (such as Formula SAE and Concrete Canoe), and
                                        professional development groups. The Engineering Student Activities Fair is held at the beginning of
                                        each semester where you can meet representatives from these organizations. You can also visit the
                                        Student Organizations Office or check the Engineering Student Life website for a complete list of
                                        organizations and their meeting schedules.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Contact Section - Simple and clean */}
                <section className="py-16 bg-[#f5f5f5]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
                            <p className="text-[#444444] mb-8">
                                Our academic advisors are here to help you navigate your educational journey.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="text-lg font-medium mb-4">Engineering Academic Affairs</h3>
                                    <ul className="space-y-2 text-[#444444]">
                                        <li>Phone: (555) 123-4567</li>
                                        <li>Email: engineering@university.edu</li>
                                        <li>Location: Engineering Building, Room 203</li>
                                        <li>Hours: Monday-Friday, 8:30 AM - 5:00 PM</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="text-lg font-medium mb-4">Schedule an Appointment</h3>
                                    <p className="text-[#444444] mb-4">
                                        Meet with an academic advisor to discuss your educational goals and create a personalized academic
                                        plan.
                                    </p>
                                    <Button className="w-full bg-[#8a1538] hover:bg-[#6a102b]" asChild>
                                        <Link to="/academics/advising">Book an Advising Session</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default Academics;