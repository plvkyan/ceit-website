// Imports
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";



// Interfaces
// Organization interface
interface Organization {
    id?: string;
    name?: string;
    description?: string;
    logo?: string;
}

interface OrganizationsProps {
    heading?: string;
    subheading?: string;
    description?: string;
    orgs?: Organization[];
}

const Organizations = ({
    heading = "College of Engineering and Information Technology",
    subheading,
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    orgs = [
        {
            name: "Civil Engineering",
            logo: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739194746/CE_Logo_hrr17n.png",
        },
        {
            name: "Electrical Engineering",
            logo: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739194746/EE_Logo_fizibg.png",
        },
        {
            name: "Information Technology",
            logo: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739194746/VITS_Logo_zphbtg.png",
        },
    ],
}: OrganizationsProps) => {

    return (

        <section className="flex flex-col items-center justify-center py-24 lg:py-30">

            <div className="container flex flex-col items-center justify-center text-center px-8">

                {subheading &&
                    <p className="semibold">
                        {subheading}
                    </p>
                }

                <h2 className="my-6 text-primary text-pretty text-2xl font-bold lg:text-4xl">
                    {heading}
                </h2>

                <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
                    {description}
                </p>

            </div>

            <div className="container mt-8 px-8 flex gap-x-8 gap-y-16 flex-wrap">

                {orgs.map((organization) => (

                    <div key={organization.id} className="flex flex-col flex-1 items-center">
                        <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
                            <AvatarImage src={organization.logo} />
                            <AvatarFallback>{organization.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center font-medium">{organization.name}</p>
                        <p className="text-center text-muted-foreground">{organization.description}</p>
                    </div>

                ))}

            </div>

        </section>

    );
};

export default Organizations;
