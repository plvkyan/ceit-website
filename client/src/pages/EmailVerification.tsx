


// Imports
import { Button } from "@/components/ui/button";
// Import shadcn form components
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// 
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"


import { useEffect, useState, useContext } from "react";

// Utility imports
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "sonner";


// Contexts
// Import AppContext from AppContext.tsx
import { AppContext } from "@/contexts/AppContext.tsx";
import { LoadingSpinner } from "@/components/ui/loading-spinner";



const emailVerificationFormSchema = z.object({
    otp: z.string().min(6, {
        message: "Your OTP must be 6 characters long.",
    }),
})



const EmailVerification = () => {

    // States
    const [loading, setLoading] = useState(false);

    const { backendUrl, setIsLoggedIn, isLoggedIn, getUserData, user } = useContext(AppContext);


    const navigate = useNavigate();

    // Effects
    // Effect for changing page title
    useEffect(() => {
        // Set the document title
        document.title = "Verify Email | Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology";
    }, []);

    // 
    useEffect(() => {
        if (isLoggedIn && user && user.isVerified) {
            // If the user is logged in and verified, redirect to the dashboard
            navigate("/dashboard");
        }
    }, [isLoggedIn, user]);

    const emailVerificationForm = useForm<z.infer<typeof emailVerificationFormSchema>>({
        resolver: zodResolver(emailVerificationFormSchema),
        defaultValues: {
            otp: "",
        },
    });

    const handleSubmit = async (values: z.infer<typeof emailVerificationFormSchema>, e: any) => {
        try {
            // Handle form submission
            // Prevent default form submission
            e.preventDefault();

            // Set loading to true
            setLoading(true);

            // This is used to send cookies with the request
            axios.defaults.withCredentials = true;

            // Post request to the backend
            const { data } = await axios.post(`${backendUrl}/api/auth/verify-email`, {
                otp: values.otp,
            });

            // Check if the response is successful
            if (data.success) {
                // Set the user data in the context
                setIsLoggedIn(true);
                // Fetch user data
                getUserData();
                toast.success("Email verified successfully!", {
                    description: "You can now fully access your account.",
                    duration: 10000,
                    closeButton: true,
                });
                // Redirect to the dashboard
                navigate("/dashboard");
            } else {
                toast.error(data.message, {
                    description: "Please check your email and password.",
                    duration: 15000,
                    closeButton: true,
                });
            }
        } catch (error) {
            // Handle error
            // Check if the error is an Axios error
            if (axios.isAxiosError(error)) {
                // If it is, check the response status
                if (error.response?.status === 400) {
                    toast.error("Invalid login credentials", {
                        description: "Please check your email and password.",
                        duration: 30000,
                        closeButton: true,
                    });
                } else {
                    // If the status is not 400, show a generic error message
                    toast.error("Login failed", {
                        description: error.response?.data?.message || "An unexpected error occurred.",
                        duration: 5000,
                        closeButton: true,
                    });
                }
            } else {
                // If the error is not an Axios error, show a generic error message
                toast.error("Login failed", {
                    description: "An unexpected error occurred. Please try again.",
                    duration: 5000,
                    closeButton: true,
                });
            }
        } finally {
            // Set loading to false
            setLoading(false);
        }
    }


    return (

        // Main container
        <section className="py-32">

            {/*  */}
            <div className="">

                <div className="flex flex-col gap-4">

                    <div className="mx-auto w-full max-w-md rounded-md px-8 py-16">

                        {/* University logos */}
                        <div className="w-full flex gap-4 mb-4">

                            {/* Pamantasan ng Lungsod ng  */}
                            <Link to="/" className="mb-6 flex items-center gap-2">
                                <img
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
                                    className="max-h-14"
                                    alt="Pamantasan ng Lungsod ng Valenzuela Logo"
                                />
                            </Link>

                            {/* College of Engineering and Information Technology logo */}
                            <Link to="/" className="mb-6 flex items-center gap-2">
                                <img
                                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
                                    className="max-h-14"
                                    alt="Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo"
                                />
                            </Link>

                        </div>

                        <div className="mb-4 flex flex-col items-center">

                            <div className="flex gap-8">
                            </div>

                            {/* Headers */}
                            <div className="w-full flex gap-1 flex-col">
                                {/* Main header */}
                                <h1 className="text-2xl font-semibold"> Verify email </h1>
                                {/* Subheading */}
                                <p className="text-sm text-muted-foreground"> Please enter the 6-digit code sent to your email. </p>
                            </div>

                        </div>



                        <div>

                            {/* Form container */}

                            <Form {...emailVerificationForm}>

                                <form onSubmit={emailVerificationForm.handleSubmit(handleSubmit)}>

                                    <div className="grid gap-4">

                                        {/* Email input container */}
                                        <div className="flex flex-col gap-2">

                                            <FormField
                                                control={emailVerificationForm.control}
                                                name="otp"
                                                render={({ field }) => (

                                                    <FormItem className="flex flex-col gap-2">

                                                        <FormLabel className="hidden">
                                                            Pin
                                                        </FormLabel>

                                                        <FormControl>
                                                            <InputOTP
                                                                className="!mt-0 w-full"
                                                                maxLength={6} {...field}
                                                                pattern="^[0-9]*$"
                                                            >
                                                                <InputOTPGroup className="flex w-full items-center justify-between">
                                                                    <InputOTPSlot
                                                                        autoFocus
                                                                        className="h-12 grow shrink text-lg font-semibold"
                                                                        index={0}
                                                                    />
                                                                    <InputOTPSlot
                                                                        className="h-12 grow shrink text-center text-lg font-semibold"
                                                                        index={1}
                                                                    />
                                                                    <InputOTPSlot
                                                                        className="h-12 grow shrink text-center text-lg font-semibold"
                                                                        index={2}
                                                                    />
                                                                    <InputOTPSlot
                                                                        className="h-12 grow shrink text-center text-lg font-semibold"
                                                                        index={3}
                                                                    />
                                                                    <InputOTPSlot
                                                                        className="h-12 grow shrink text-center text-lg font-semibold"
                                                                        index={4}
                                                                    />
                                                                    <InputOTPSlot
                                                                        className="h-12 grow shrink text-center text-lg font-semibold"
                                                                        index={5}
                                                                    />
                                                                </InputOTPGroup>
                                                            </InputOTP>

                                                        </FormControl>

                                                        <FormMessage />

                                                    </FormItem>
                                                )}
                                            />

                                        </div>

                                        <Button
                                            className="mt-2 w-full"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            {loading && <LoadingSpinner className="mr-2" />}
                                            Verify
                                        </Button>

                                    </div>

                                </form>

                            </Form>

                            <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-muted-foreground">
                                <p> Didn't get a code? </p>
                                <Link to="/signup" className="text-primary hover:underline">
                                    Resend code
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default EmailVerification;
