import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Beaker,
    Building2,
    ChevronRight,
    Cpu,
    FlaskConical,
    Laptop,
    type LucideIcon,
    Microscope,
    MonitorSmartphone,
    Network,
    PenTool,
    Rocket,
    Users,
    Wrench,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Clock,
} from "lucide-react"
import NavigationBar from "@/components/ui/navigation-bar"
import Footer from "@/components/ui/footer"

// Custom component for facility feature
interface FacilityFeatureProps {
    icon: LucideIcon
    title: string
    description: string
}

function FacilityFeature({ icon: Icon, title, description }: FacilityFeatureProps) {
    return (
        <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-slate-100">
            <div className="mt-0.5">
                <div className="bg-primary/10 p-2 rounded-md">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
            </div>
            <div>
                <h3 className="font-medium text-slate-900">{title}</h3>
                <p className="text-sm text-slate-500 mt-1">{description}</p>
            </div>
        </div>
    )
}

// Custom component for facility card
interface FacilityCardProps {
    title: string
    description: string
    icon: LucideIcon
    imageUrl: string
    features: string[]
}

function FacilityCard({ title, description, icon: Icon, imageUrl, features }: FacilityCardProps) {
    return (
        <Card className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white p-2 rounded-full shadow-md">
                        <Icon className="h-5 w-5 text-primary" />
                    </div>
                </div>
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-1 mt-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-base flex items-start py-1">
                            <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" size="default" className="ml-auto">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function Facilities() {
    return (
        <>
            <NavigationBar />
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
                        <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30" variant="outline">World-Class Facilities</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Where Innovation Happens
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mb-8">
                            At the College of Engineering and Information Technology (CEIT), we provide
                            state-of-the-art laboratories, study areas, and collaboration spaces to
                            ensure our students have everything they need to excel in their fields.
                        </p>
                        {/* <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                                Take a Virtual Tour
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                Schedule a Visit
                            </Button>
                        </div> */}
                    </div>
                </section>

                {/* Facility Overview */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Facilities at a Glance</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Cutting-edge spaces designed to foster innovation, collaboration, and academic excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="relative overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                                <CardHeader>
                                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
                                        <Beaker className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">12</CardTitle>
                                    <CardDescription className="text-white/80 text-lg">Engineering Labs</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/90">
                                        Fully equipped laboratories supporting diverse engineering disciplines and research initiatives.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden border-none shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                                <CardHeader>
                                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
                                        <Laptop className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">4</CardTitle>
                                    <CardDescription className="text-white/80 text-lg">IT Labs</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/90">
                                        Modern computing facilities with industry-standard software and hardware configurations.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden border-none shadow-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                                <CardHeader>
                                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">20+</CardTitle>
                                    <CardDescription className="text-white/80 text-lg">Learning Spaces</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/90">
                                        Versatile environments for study, collaboration, and instruction designed for today's learners.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Engineering Labs */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3 sticky top-24">
                                <Badge className="mb-4">Engineering Excellence</Badge>
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Engineering Laboratories</h2>
                                <p className="text-muted-foreground mb-6">
                                    Our engineering laboratories represent the cornerstone of our hands-on educational approach, providing
                                    students with practical experience that complements theoretical knowledge.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button variant="link" className="justify-start p-0 h-auto text-base my-4">
                                                <FlaskConical className="h-4 w-4 mr-2" /> Materials Testing
                                            </Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="flex justify-between space-x-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-2">Materials Testing Laboratory</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Advanced equipment for analyzing material properties, stress testing, and quality assurance.
                                                    </p>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button variant="link" className="justify-start p-0 h-auto text-base mb-4">
                                                <Rocket className="h-4 w-4 mr-2" /> Robotics & Automation
                                            </Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="flex justify-between space-x-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-2">Robotics & Automation Lab</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Cutting-edge robotics platforms, programmable logic controllers, and automation systems.
                                                    </p>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button variant="link" className="justify-start p-0 h-auto text-base mb-4">
                                                <Microscope className="h-4 w-4 mr-2" /> Electronics Lab
                                            </Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="flex justify-between space-x-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-2">Electronics Laboratory</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Equipped with oscilloscopes, function generators, power supplies, and digital multimeters.
                                                    </p>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            </div>

                            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid gap-6">
                                    <Card className="overflow-hidden">
                                        <div className="h-48 relative">
                                            <img
                                                src="/placeholder.svg?height=400&width=600"
                                                alt="Materials Testing Lab"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                <div className="p-4">
                                                    <h3 className="text-white font-medium">Materials Testing Lab</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                        <div className="h-64 relative">
                                            <img
                                                src="/placeholder.svg?height=400&width=600"
                                                alt="Mechanical Workshop"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                <div className="p-4">
                                                    <h3 className="text-white font-medium">Mechanical Workshop</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="grid gap-6">
                                    <Card className="overflow-hidden">
                                        <div className="h-64 relative">
                                            <img
                                                src="/placeholder.svg?height=400&width=600"
                                                alt="Robotics Lab"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                <div className="p-4">
                                                    <h3 className="text-white font-medium">Robotics Lab</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="overflow-hidden">
                                        <div className="h-48 relative">
                                            <img
                                                src="/placeholder.svg?height=400&width=600"
                                                alt="Electronics Lab"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                <div className="p-4">
                                                    <h3 className="text-white font-medium">Electronics Lab</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IT Facilities */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge className="mb-4">Digital Innovation</Badge>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Information Technology Facilities</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our IT facilities provide students with access to modern computing resources and industry-standard
                                software.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <FacilityCard
                                title="Advanced Computing Lab"
                                description="High-performance computing and AI development"
                                icon={Cpu}
                                imageUrl="/placeholder.svg?height=400&width=600"
                                features={[
                                    "CUDA-enabled GPUs for parallel computing",
                                    "Machine learning frameworks",
                                    "Big data processing tools",
                                    "Advanced cooling systems",
                                ]}
                            />

                            <FacilityCard
                                title="Software Development Studio"
                                description="Professional development environment"
                                icon={Laptop}
                                imageUrl="/placeholder.svg?height=400&width=600"
                                features={[
                                    "Version control systems",
                                    "Agile development tools",
                                    "Continuous integration platforms",
                                    "Collaborative workspaces",
                                ]}
                            />

                            <FacilityCard
                                title="Networking Laboratory"
                                description="Hands-on network design and security"
                                icon={Network}
                                imageUrl="/placeholder.svg?height=400&width=600"
                                features={[
                                    "Enterprise routers and switches",
                                    "Network security appliances",
                                    "Wireless networking testbeds",
                                    "Virtualization platforms",
                                ]}
                            />
                        </div>

                        <div className="bg-slate-100 rounded-lg p-6 md:p-8">
                            <h3 className="text-2xl font-semibold mb-6">Available Software & Resources</h3>
                            <Accordion type="multiple" defaultValue={["development", "design"]}>
                                <AccordionItem value="development">
                                    <AccordionTrigger>
                                        <div className="flex items-center justify-center">
                                            <PenTool className="h-5 w-5 mr-2 text-primary" />
                                            <span className="text-lg ml-2 font-semibold">Development Tools</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-7 mb-4">
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Visual Studio
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Eclipse
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                IntelliJ IDEA
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                GitHub Desktop
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Docker Desktop
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                VS Code
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Android Studio
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Xcode
                                            </Badge>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="design">
                                    <AccordionTrigger>
                                        <div className="flex items-center justify-center">
                                            <MonitorSmartphone className="h-5 w-5 mr-2 text-primary" />
                                            <span className="text-lg ml-2 font-semibold">Design Software</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-7 mb-4">
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Adobe Creative Suite
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Figma
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Sketch
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                AutoCAD
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Blender
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Unity
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Unreal Engine
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                3DS Max
                                            </Badge>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="database">
                                    <AccordionTrigger>
                                        <div className="flex items-center justify-center">
                                            <Building2 className="h-5 w-5 mr-2 text-primary" />
                                            <span className="text-lg ml-2 font-semibold">Database Systems</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-7 mb-4">
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                MySQL
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                PostgreSQL
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                MongoDB
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Oracle Database
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Microsoft SQL Server
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Redis
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Firebase
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Supabase
                                            </Badge>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="analysis">
                                    <AccordionTrigger>
                                        <div className="flex items-center">
                                            <Wrench className="h-5 w-5 mr-2 text-primary" />
                                            <span className="text-lg ml-2 font-semibold">Analysis Tools</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-7 mb-4">
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                MATLAB
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                R Studio
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Tableau
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                SPSS
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                SAS
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Power BI
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Jupyter Notebook
                                            </Badge>
                                            <Badge variant="outline" className="justify-start text-sm font-medium">
                                                Python
                                            </Badge>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Learning Spaces */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge className="mb-4">Collaborative Environments</Badge>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Learning & Collaboration Spaces</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our thoughtfully designed learning environments support diverse educational activities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <img
                                        src="/placeholder.svg?height=400&width=600"
                                        alt="Modern Lecture Hall"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>Modern Lecture Halls</CardTitle>
                                    <CardDescription>Advanced audio-visual systems and comfortable seating</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <FacilityFeature
                                            icon={GraduationCap}
                                            title="Interactive Learning"
                                            description="Digital whiteboards and presentation systems"
                                        />
                                        <FacilityFeature
                                            icon={Users}
                                            title="Flexible Seating"
                                            description="Configurable spaces for different teaching styles"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <img
                                        src="/placeholder.svg?height=400&width=600"
                                        alt="Study Rooms"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>Study Rooms</CardTitle>
                                    <CardDescription>Quiet, focused environments for individual study</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <FacilityFeature
                                            icon={BookOpen}
                                            title="Distraction-Free"
                                            description="Regulated rooms for deep focus"
                                        />
                                        <FacilityFeature
                                            icon={Clock}
                                            title="9 to 5 Access"
                                            description="Available around the clock during exam periods"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <img
                                        src="/placeholder.svg?height=400&width=600"
                                        alt="Collaboration Spaces"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>Collaboration Spaces</CardTitle>
                                    <CardDescription>Flexible areas designed for group work</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <FacilityFeature
                                            icon={Lightbulb}
                                            title="Idea Generation"
                                            description="Whiteboards and brainstorming tools"
                                        />
                                        <FacilityFeature
                                            icon={Laptop}
                                            title="Tech-Enabled"
                                            description="Free to use outlets for your devices"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-8">Learning Environment Features</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-medium">Smart Classrooms</h4>
                                </div>
                                <div className="text-center">
                                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-medium">Breakout Areas</h4>
                                </div>
                                <div className="text-center">
                                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <Cpu className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-medium">Tech-Enabled</h4>
                                </div>
                                <div className="text-center">
                                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <Lightbulb className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-medium">Innovation Hub</h4>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge className="mb-4">Student Experiences</Badge>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Students Say</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Hear from students who have utilized our facilities for their academic and research endeavors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                                            <AvatarFallback>JS</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg">James Smith</CardTitle>
                                            <CardDescription>Civil Engineering</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "The materials testing lab gave me hands-on experience that was crucial for my internship. The
                                        equipment is industry-standard and the staff is incredibly helpful."
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                                            <AvatarFallback>AP</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg">Aisha Patel</CardTitle>
                                            <CardDescription>Information Technology</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "The advanced computing lab was essential for my machine learning project. Having access to
                                        high-performance GPUs made a huge difference in my research outcomes."
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                                            <AvatarFallback>MR</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg">Miguel Rodriguez</CardTitle>
                                            <CardDescription>Electrical Engineering</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "The collaboration spaces were perfect for our senior design project. We could work together
                                        effectively and had all the tools we needed to prototype our ideas."
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Access & Booking */}
                {/* <section className="py-16 md:py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge className="mb-4">Resource Access</Badge>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Facility Access & Booking</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our facilities are available to students, faculty, and researchers through a streamlined reservation
                                system.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>For Students</CardTitle>
                                    <CardDescription>How to access and book facilities as a student</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Scheduled Class Access</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    All laboratories are available during scheduled class hours under faculty supervision.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Study Room Reservations</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Individual and group study rooms can be booked through our online portal.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Open Access Spaces</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Collaboration spaces are available on a first-come, first-served basis during building hours.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild>
                                        <Link to="/student-booking">Student Booking Portal</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>For Faculty & Researchers</CardTitle>
                                    <CardDescription>How to access and book facilities as faculty or researcher</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Research Priority</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Faculty and researchers receive priority booking for laboratories and specialized equipment.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Equipment Reservation</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Specialized equipment can be reserved through the faculty portal with detailed usage tracking.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-primary text-sm font-medium">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Technical Support</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Dedicated technical support staff are available during working hours.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild>
                                        <Link to="/faculty-booking">Faculty Booking Portal</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-2/3">
                                    <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
                                    <p className="text-muted-foreground mb-6">
                                        For inquiries about our facilities or to report maintenance issues, please contact the Facilities
                                        Management Office.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center">
                                            <div className="bg-primary/10 p-2 rounded-full mr-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-primary"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <span>facilities@engineering.edu</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-primary/10 p-2 rounded-full mr-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-primary"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <span>(555) 123-4567</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/3">
                                    <Button size="lg" className="w-full">
                                        <Link to="/contact">Contact Support</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Virtual Tour CTA */}
                <section className="relative py-16 md:py-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Experience Our Facilities</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                            Schedule a campus tour to see our world-class facilities in person and learn how they can support your
                            academic journey.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                                <Link to="/schedule-tour">Schedule a Visit</Link>
                            </Button>
                            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                <Link to="/virtual-tour">Take a Virtual Tour</Link>
                            </Button> */}
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                {/* <section className="py-12 bg-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="ghost" asChild>
                                <Link to="/engineering">Engineering Programs</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link to="/it">IT Programs</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link to="/research">Research</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link to="/admissions">Admissions</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link to="/campus-map">Campus Map</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section> */}
            </div>
            <Footer />
        </>
    )
}
