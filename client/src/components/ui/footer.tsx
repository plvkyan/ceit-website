import { Link } from "react-router-dom";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface FooterProps {
    primaryLogo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    secondaryLogo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
    primaryLogo = {
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png",
        alt: "Pamantasan ng Lungsod ng Valenzuela Logo",
        title: "Pamantasan ng Lungsod ng Valenzuela",
        url: "/home",
    },
    secondaryLogo = {
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png",
        alt: "College of Engineering and Information Technology Logo",
        title: "College of Engineering and Information Technology",
        url: "/home",
    },
    menuItems = [
        {
            title: "Quick Links",
            links: [
                { text: "About Civil Engineering", url: "#" },
                { text: "About Electrical Engineering", url: "#" },
                { text: "About Information Technology", url: "#" },
            ],
        },
        {
            title: "Follow Us",
            links: [
                { text: "Facebook", url: "#" },
                { text: "Instagram", url: "#" },
                { text: "LinkedIn", url: "#" },
            ],
        },
    ],
    copyright = "© 2025 Copyright. All rights reserved.",
    bottomLinks = [
        { text: "Terms and Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
    ],
}: FooterProps) => {
    return (
        <section className="flex py-32 px-8 items-center justify-center">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 flex flex-col gap-6 mb-8 lg:mb-0">
                            <div className="flex flex-col text-center sm:text-start sm:flex-row items-center justify gap-6">
                                <Link to="/home">
                                    <img
                                        src={primaryLogo.src}
                                        alt={primaryLogo.alt}
                                        title={primaryLogo.title}
                                        className="aspect-square max-w-16"
                                    />
                                </Link>
                                <p className="text-xl font-semibold">{primaryLogo.title}</p>
                            </div>
                            <div className="flex flex-col text-center sm:text-start sm:flex-row items-center justify gap-6">
                                <Link to="/home">
                                    <img
                                        src={secondaryLogo.src}
                                        alt={secondaryLogo.alt}
                                        title={secondaryLogo.title}
                                        className="aspect-square max-w-16"
                                    />
                                </Link>
                                <p className="text-xl font-semibold">{secondaryLogo.title}</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex md:col-span-1"></div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold uppercase">{section.title}</h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium transition-colors hover:underline hover:text-primary"
                                        >
                                            <Link to={link.url}>{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="underline transition-colors hover:text-primary">
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
