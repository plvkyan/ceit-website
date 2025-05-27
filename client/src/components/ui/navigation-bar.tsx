// Imports
// Component imports
// Accordion component imports
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// Button component import
import { Button } from "@/components/ui/button";
// Navigation menu component imports
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// Sheet component imports
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// Icon imports
import {
    Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";



// Interfaces
// The properties of the menu items
interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: JSX.Element;
    items?: MenuItem[];
}

// The properties of the navigation bar
interface NavbarProps {
    // The logo for the navigation bar
    logo?: {
        url: string;
        src: string;
        alt: string;
        title?: string;
    };
    // The navigation bar menu items
    menu?: MenuItem[];
    // Extra links for the mobile navigation
    mobileExtraLinks?: {
        name: string;
        url: string;
    }[];
    // The call to action section of the navigation bar
    callToAction?: {
        primaryAction: {
            text: string;
            url: string;
        };
        secondaryAction: {
            text: string;
            url: string;
        };
    };
}



const NavigationBar = ({
    // The logo for the navigation bar
    logo = {
        url: "/",
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png",
        alt: "CEIT Logo",
    },
    // The navigation bar menu items/links
    menu = [
        { title: "Home", url: "/home" },
        { title: "Academics", url: "/academics" },
        { title: "Students", url: "/students" },
        { title: "Community", url: "/community" },
        { title: "Facilities", url: "/facilities" },
        { title: "News", url: "/news" },
    ],

    // Extra links for the mobile navigation–I disabled it for now
    // mobileExtraLinks = [
    // ],

    // The call to action section of the navigation bar to the right
    callToAction: auth = {
        primaryAction: { text: "Log in", url: "/login" },
        secondaryAction: { text: "Sign up", url: "/signup" },
    },
}: NavbarProps) => {

    return (

        // The parent container for the navigation bar
        <header className="sticky -top-1 z-50 flex py-4 px-8 justify-center bg-white border-b border-b-black/15">

            {/* The container for the navigation bar, the "container" class adjusts automatically depending on the current breakpoint */}
            <div className="container">

                {/* The desktop navigation bar */}
                <nav className="hidden justify-between lg:flex">

                    {/* The navigation bar logo container */}
                    <div className="flex items-center">

                        {/* The navigation bar logo */}
                        <Link to={logo.url} className="flex items-center gap-2">
                            <img src={logo.src} className="w-14" alt={logo.alt} />
                            <span className="text-lg font-semibold">{logo.title}</span>
                        </Link>

                    </div>

                    {/* The navigation bar menu items */}
                    <div className="flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Call to action section–I set it to login and sign up for now */}
                    {/* <div className="flex gap-2 items-center">

                        <Button asChild variant="outline" size="default">
                            <Link to={auth.primaryAction.url}>{auth.primaryAction.text}</Link>
                        </Button>

                        <Button asChild size="default">
                            <Link to={auth.secondaryAction.url}>{auth.secondaryAction.text}</Link>
                        </Button>

                    </div> */}

                </nav>

                {/* The mobile navigation menu */}
                <div className="block lg:hidden">

                    {/* The container for the mobile navigation menu that spans across the top of the screen */}
                    <div className="flex items-center justify-between">

                        {/* The navigation menu logo */}
                        <Link to={logo.url} className="flex items-center gap-2">
                            <img src={logo.src} className="w-8" alt={logo.alt} />
                            <span className="text-lg font-semibold">{logo.title}</span>
                        </Link>

                        {/* The sheet that opens when the hamburger menu button is clicked */}
                        <Sheet>

                            {/* The hamburger menu button that opens the sheet */}
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>

                            {/* The content of the mobile navigation menu */}
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link to={logo.url} className="flex items-center gap-2">
                                            <img src={logo.src} className="w-8" alt={logo.alt} />
                                            <span className="text-lg font-semibold">
                                                {logo.title}
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="my-6 flex flex-col gap-6">

                                    {/* The menu items in mobile view */}
                                    {/* It's an accordion in the case of dropdown items */}
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    {/* Extra mobile links–disabled for now since there aren't extra links yet */}
                                    {/* <div className="border-t py-4">
                                        <div className="grid grid-cols-2 justify-start">
                                            {mobileExtraLinks.map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                                                    to={link.url}
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* Call to action section in mobile */}
                                    {/* <div className="flex flex-col gap-3">

                                        <Button asChild variant="outline">
                                            <Link to={auth.primaryAction.url}>{auth.primaryAction.text}</Link>
                                        </Button>

                                        <Button asChild>
                                            <Link to={auth.secondaryAction.url}>{auth.secondaryAction.text}</Link>
                                        </Button>

                                    </div> */}

                                </div>

                            </SheetContent>

                        </Sheet>

                    </div>

                </div>

            </div>

        </header>
    );
};

// Function to render the desktop menu items
const renderMenuItem = (item: MenuItem) => {

    const location = useLocation();
    const { pathname } = location;

    // If the menu item has sub-items, then it will be rendered as a dropdown
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} className="text-muted-foreground">
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-80 p-3">
                        <NavigationMenuLink>
                            {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                    <Link
                                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                                        to={subItem.url}
                                    >
                                        {subItem.icon}
                                        <div>
                                            <div className="text-sm font-semibold">
                                                {subItem.title}
                                            </div>
                                            {subItem.description && (
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    {subItem.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </NavigationMenuLink>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // If the current URL matches the navigation bar item, then it will be highlighted and underlined
    if (pathname === item.url) {
        return (
            <Link
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium text-primary underline underline-offset-8 decoration-2 transition-colors hover:decoration-transparent hover:bg-muted"
                key={item.title}
                to={item.url}
            >
                {item.title}
            </Link>
        );
    }

    return (
        <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            key={item.title}
            to={item.url}
        >
            {item.title}
        </Link>
    );
};

// Function to render the mobile menu items
const renderMobileMenuItem = (item: MenuItem) => {

    const location = useLocation();
    const { pathname } = location;

    // If the menu item has sub-items, then it will be rendered as an accordion
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-base py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <Link
                            key={subItem.title}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            to={subItem.url}
                        >
                            {subItem.icon}
                            <div>
                                <div className="text-sm font-semibold">{subItem.title}</div>
                                {subItem.description && (
                                    <p className="text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    // If the current URL matches the navigation bar item, then it will be highlighted and underlined
    if (pathname === item.url) {
        return (
            <Link key={item.title} to={item.url} className="font-semibold text-primary underline underline-offset-8 decoration-2 transition-colors">
                {item.title}
            </Link>
        )
    }

    return (
        <Link key={item.title} to={item.url} className="font-semibold">
            {item.title}
        </Link>
    );
};

export default NavigationBar;
