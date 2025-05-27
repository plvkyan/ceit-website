


// Imports
// Utility imports
// react-router-dom imports
import { Link } from "react-router-dom";





const Footer = () => {



    return (

        // Footer section
        <section className="relative flex overflow-hidden py-16 px-8 items-center justify-center bg-plvblue text-white border-t border-plvbluedark border-t-[12px]">

            {/* Container for the footer content */}
            <div className="container z-20">

                {/* Footer content */}
                <footer>

                    {/* Grid layout for footer sections */}
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">

                        {/* University logos' container */}
                        <div className="col-span-2 flex flex-col gap-6 mb-8 lg:mb-0">

                            {/* Pamantasan ng Lungsod ng Valenzuela Logo */}
                            <div className="flex flex-col text-center sm:text-start sm:flex-row items-center justify gap-6">
                                {/* Logo link to home page */}
                                <Link to="/home">
                                    {/* Logo image source */}
                                    <img
                                        src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
                                        alt="Pamantasan ng Lungsod ng Valenzuela Logo"
                                        title="Pamantasan ng Lungsod ng Valenzuela"
                                        className="aspect-square max-w-16"
                                    />
                                </Link>

                                {/* Logo label */}
                                <p className="text-xl font-semibold"> Pamantasan ng Lungsod ng Valenzuela </p>
                            </div>

                            {/* Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology Logo */}
                            <div className="flex flex-col text-center sm:text-start sm:flex-row items-center justify gap-6">
                                {/* Logo link to home page */}
                                <Link to="/home">
                                    {/* Logo image source */}
                                    <img
                                        src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
                                        alt="Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology Logo"
                                        title="College of Engineering and Information Technology"
                                        className="aspect-square max-w-16"
                                    />
                                </Link>

                                {/* Logo label */}
                                <p className="text-xl font-semibold"> College of Engineering and Information Technology </p>
                            </div>

                        </div>



                        {/* Links container */}
                        <div className="hidden lg:flex md:col-span-1" />

                        {/* Quick links */}
                        <div className="">

                            <h3 className="mb-4 font-bold uppercase"> Quick Links </h3>

                            <ul className="space-y-4">
                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">About Civil Engineering</Link>
                                </li>

                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">About Electrical Engineering</Link>
                                </li>

                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">About Information Technology</Link>
                                </li>
                            </ul>

                        </div>

                        {/* Follow us links */}
                        <div className="">

                            <h3 className="mb-4 font-bold uppercase"> Follow Us </h3>

                            <ul className="space-y-4">
                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">Facebook</Link>
                                </li>

                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">Instagram</Link>
                                </li>

                                <li className="font-medium transition-colors hover:underline">
                                    <Link to="#">LinkedIn</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                    {/* Bottom links and copyright section */}
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">

                        {/* Copyright */}
                        <p> © 2025 Copyright. All rights reserved. </p>

                        {/* Bottom links */}
                        <ul className="flex gap-4">
                            <li className="underline transition-colors">
                                <Link to="#">Terms and Conditions</Link>
                            </li>

                            <li className="underline transition-colors">
                                <Link to="#">Privacy Policy</Link>
                            </li>
                        </ul>

                    </div>

                </footer>

            </div>

            <div className="absolute z-10 left-12 sm:left-36 md:left-36 lg:left-64 top-0 w-full h-full bg-gradient-to-r from-[#162B60] from-15%"></div>

            <img
                src="https://res.cloudinary.com/dmodbgukj/image/upload/v1748349180/PLV-CEIT-Website-Footer-Image-Colored_tljret.png"
                alt="Pamantasan ng Lungsod ng Valenzuela Maysan Campus"
                className="absolute left-12 sm:left-36 md:left-36 lg:left-64 overflow-hidden object-cover w-full h-full"
            />

        </section>

    );
};

export default Footer;
