


// Imports
// shadcn Button component import
import { Button } from "@/components/ui/button";
// shadcn Form component imports
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
// shadcn Input component import
import { Input } from "@/components/ui/input";
// shadcn InputOTP component imports
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
// shadcn Toast component import
import { toast } from "sonner";



// Utility imports
// React imports
import {
    useEffect,
    useState,
    useContext
} from "react";

// Zod and react-hook-form imports
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



// Contexts
// Import AppContext from AppContext.tsx
import { AppContext } from "@/contexts/AppContext.tsx";
import { LoadingSpinner } from "@/components/ui/loading-spinner";





// Zod schema for the reset email form
const resetEmailFormSchema = z.object({
    email: z.string().email(),
})

// Zod schema for the reset password OTP
const resetPasswordOtpFormSchema = z.object({
    otp: z.string().min(6, {
        message: "The code must be 6 characters long.",
    }),
});

// Zod schema for the reset password form
const resetPasswordFormSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long."),
    confirmPassword: z.string(),
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match.",
            path: ["confirmPassword"],
        }
    );





const ForgotPassword = () => {

    // States
    // State for showing password
    const [showPassword, setShowPassword] = useState(false);
    // State for showing confirm password
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // State for loading
    const [loading, setLoading] = useState(false);
    // State for checking if the email is sent
    const [isEmailSent, setisEmailSent] = useState(false);
    // State for checking if the OTP is submitted
    const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);



    // Contexts
    // Import AppContext from AppContext.tsx
    const { backendUrl, isLoggedIn, setIsLoggedIn, user, getUserData } = useContext(AppContext);



    // Navigation
    // Import useNavigate from react-router-dom
    const navigate = useNavigate();



    // Effects
    // Effect for changing page title
    useEffect(() => {
        document.title = "Reset Password | Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology";
    }, []);

    // Effect for checking if the user is logged in
    useEffect(() => {
        if (isLoggedIn && user) {
            // If the user is logged in, redirect to the dashboard
            navigate("/dashboard");
        }
    }, [isLoggedIn, user]);



    // Form hooks
    // Import useForm from react-hook-form
    // Import zodResolver from @hookform/resolvers/zod
    // Import z from zod
    // Create form hooks for the reset email form, reset password OTP form, and reset password form
    // Reset email form
    const resetEmailForm = useForm<z.infer<typeof resetEmailFormSchema>>({
        resolver: zodResolver(resetEmailFormSchema),
        defaultValues: {
            email: "",
        },
    });

    // Reset password OTP form
    const resetPasswordOtpForm = useForm<z.infer<typeof resetPasswordOtpFormSchema>>({
        resolver: zodResolver(resetPasswordOtpFormSchema),
        defaultValues: {
            otp: "",
        },
    });

    // Reset password form
    const resetPasswordForm = useForm<z.infer<typeof resetPasswordFormSchema>>({
        resolver: zodResolver(resetPasswordFormSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });



    // Functions
    // Function to handle email submission
    const handleEmailSubmit = async (values: z.infer<typeof resetEmailFormSchema>, e: any) => {
        try {
            // Handle form submission
            // Prevent default form submission
            e.preventDefault();

            // Set loading to true
            setLoading(true);

            // This is used to send cookies with the request
            axios.defaults.withCredentials = true;

            // Post request to the backend
            const { data } = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, {
                email: values.email,
            });

            // Check if the response is successful
            if (data.success) {
                toast.success("Reset password code sent successfully", {
                    description: "Please check your email for the 6-digit code.",
                    duration: 10000,
                    closeButton: true,
                });
                // Set the email sent state to true
                setisEmailSent(true);
            } else {
                // If the response is not successful, show an error message
                toast.error("Sending email unsuccessful", {
                    description: data.message || "An unexpected error occurred.",
                    duration: 15000,
                    closeButton: true,
                });
            }
        } catch (error: any) {
            // If the response is not successful, show an error message
            toast.error("Sending email unsuccessful", {
                description: error.response?.data?.message || "An unexpected error occurred.",
                duration: 15000,
                closeButton: true,
            });
        } finally {
            // Set loading to false
            setLoading(false);
        }
    }

    // Function to handle OTP submission
    const handleOtpSubmit = async (values: z.infer<typeof resetPasswordOtpFormSchema>, e: any) => {
        try {
            // Handle form submission
            // Prevent default form submission
            e.preventDefault();

            // Set loading to true
            setLoading(true);

            // This is used to send cookies with the request
            axios.defaults.withCredentials = true;

            // Post request to the backend
            const { data } = await axios.post(`${backendUrl}/api/auth/verify-reset-otp`, {
                email: resetEmailForm.getValues("email"),
                otp: values.otp,
            });

            if (data.success) {
                // If the response is successful, set the OTP submitted state to true
                setIsOtpSubmitted(true);
                toast.success("Code verified successfully", {
                    description: "You can now reset your password.",
                    duration: 10000,
                    closeButton: true,
                });
            } else {
                // If the response is not successful, show an error message
                toast.error("Code verification unsuccessful", {
                    description: data.message || "An unexpected error occurred.",
                    duration: 10000,
                    closeButton: true,
                });
            }
        } catch (error: any) {
            // If the response is not successful, show an error message
            toast.error("Code verification unsuccessful", {
                description: error.response?.data?.error || "An unexpected error occurred.",
                duration: 10000,
                closeButton: true,
            });
        } finally {
            setLoading(false);
        }
    }

    // Function to handle password submission
    const handlePasswordSubmit = async (values: z.infer<typeof resetPasswordFormSchema>, e: any) => {
        try {
            // Handle form submission
            // Prevent default form submission
            e.preventDefault();

            // Set loading to true
            setLoading(true);

            // This is used to send cookies with the request
            axios.defaults.withCredentials = true;

            // Post request to the backend
            const { data } = await axios.post(`${backendUrl}/api/auth/reset-password`, {
                email: resetEmailForm.getValues("email"),
                otp: resetPasswordOtpForm.getValues("otp"),
                newPassword: values.password,
            });

            // Check if the response is successful
            if (data.success) {
                toast.success("Password reset successfully", {
                    description: "You can now log in with your new password.",
                    duration: 10000,
                    closeButton: true,
                });
                // Redirect to the login page
                navigate("/login");
            } else {
                // If the response is not successful, show an error message
                toast.error("Password reset unsuccessful", {
                    description: data.message || "An unexpected error occurred.",
                    duration: 10000,
                    closeButton: true,
                });
            }
        } catch (error: any) {
            // If the response is not successful, show an error message
            toast.error("Password reset unsuccessful", {
                description: error.response?.data?.error || "An unexpected error occurred.",
                duration: 10000,
                closeButton: true,
            });
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

                        <div className="mb-6 flex flex-col items-center">

                            <div className="flex gap-8">
                            </div>

                            {/* Headers */}
                            {!isEmailSent && !isOtpSubmitted && (
                                <div className="w-full flex gap-1 flex-col">
                                    {/* Main header */}
                                    <h1 className="text-2xl font-semibold"> Forgot your password? </h1>
                                    {/* Subheading */}
                                    <p className="text-sm text-muted-foreground"> Enter your email address and we will send you a code to reset your password. </p>
                                </div>
                            )}

                            {isEmailSent && !isOtpSubmitted && (
                                <div className="w-full flex gap-1 flex-col">
                                    {/* Main header */}
                                    <h1 className="text-2xl font-semibold"> Reset password code </h1>
                                    {/* Subheading */}
                                    <p className="text-sm text-muted-foreground"> Please enter the 6-digit code sent to your email to reset your password. </p>
                                </div>
                            )}

                            {isEmailSent && isOtpSubmitted && (
                                <div className="w-full flex gap-1 flex-col">
                                    {/* Main header */}
                                    <h1 className="text-2xl font-semibold"> Reset password </h1>
                                    {/* Subheading */}
                                    <p className="text-sm text-muted-foreground"> Please enter the new password you'll use to log in. </p>
                                </div>
                            )}

                        </div>



                        <div>

                            {/* Reset email form container */}
                            { /* If the email is not sent, show the reset email form */}
                            {!isEmailSent && !isOtpSubmitted && (
                                <Form {...resetEmailForm}>

                                    <form onSubmit={resetEmailForm.handleSubmit(handleEmailSubmit)}>

                                        <div className="grid gap-4">

                                            {/* Email input container */}
                                            <div className="flex flex-col gap-2">

                                                <FormField
                                                    control={resetEmailForm.control}
                                                    name="email"
                                                    render={({ field }) => (

                                                        <FormItem className="flex flex-col gap-2">

                                                            <FormLabel>
                                                                Email
                                                                <span className="text-destructive"> * </span>
                                                            </FormLabel>

                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    className="!mt-0"
                                                                    type="email"
                                                                    placeholder="example@example.com"
                                                                    required
                                                                />

                                                            </FormControl>

                                                            <FormMessage className="text-sm !mt-0" />

                                                        </FormItem>
                                                    )}
                                                />

                                            </div>

                                            <div className="mt-2 flex flex-col gap-3">
                                                <Button
                                                    className="w-full"
                                                    disabled={loading}
                                                    type="submit"
                                                >
                                                    {loading ? <LoadingSpinner /> : null}
                                                    Submit email
                                                </Button>

                                                <Link to="/login">
                                                    <Button
                                                        className="w-full"
                                                        disabled={loading}
                                                        type="button"
                                                        variant="outline"
                                                    >
                                                        Back to login
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>

                                    </form>

                                </Form>
                            )}

                            {/* Reset email form container */}
                            { /* If the email is sent, show the reset password OTP form */}
                            {isEmailSent && !isOtpSubmitted && (
                                <Form {...resetPasswordOtpForm}>

                                    <form onSubmit={resetPasswordOtpForm.handleSubmit(handleOtpSubmit)}>

                                        <div className="grid gap-4">

                                            {/* OTP input container */}
                                            <div className="flex flex-col gap-2">

                                                <FormField
                                                    control={resetPasswordOtpForm.control}
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

                                                            <FormMessage className="text-sm !mt-0"/>

                                                        </FormItem>
                                                    )}
                                                />

                                            </div>

                                            <div className="mt-2 flex flex-col gap-3">
                                                <Button
                                                    className="w-full"
                                                    disabled={loading}
                                                    type="submit"
                                                >
                                                    {loading ? <LoadingSpinner /> : null}
                                                    Submit code
                                                </Button>

                                                <Link to="/login">
                                                    <Button
                                                        className="w-full"
                                                        disabled={loading}
                                                        type="button"
                                                        variant="outline"
                                                    >
                                                        Back to login
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>

                                    </form>

                                </Form>
                            )}

                            {/* Reset password form container */}
                            { /* If the OTP is submitted, show the reset password form */}
                            {isEmailSent && isOtpSubmitted && (
                                <Form {...resetPasswordForm}>

                                    <form onSubmit={resetPasswordForm.handleSubmit(handlePasswordSubmit)}>

                                        <div className="grid gap-4">

                                            {/* Password input container */}
                                            <div className="flex flex-col gap-2">

                                                <FormField
                                                    control={resetPasswordForm.control}
                                                    name="password"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col gap-2">

                                                            <FormLabel>
                                                                Password
                                                                <span className="text-destructive"> * </span>
                                                            </FormLabel>

                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    className="!mt-0"
                                                                    type={showPassword ? "text" : "password"}
                                                                    placeholder="Enter your password"
                                                                    required
                                                                />
                                                            </FormControl>

                                                            <FormMessage className="text-sm !mt-0" />

                                                        </FormItem>
                                                    )}
                                                />

                                            </div>

                                            {/* Confirm password input container */}
                                            <div className="flex flex-col gap-2">

                                                <FormField
                                                    control={resetPasswordForm.control}
                                                    name="confirmPassword"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col gap-2">

                                                            <FormLabel>
                                                                Confirm Password
                                                                <span className="text-destructive"> * </span>
                                                            </FormLabel>

                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    className="!mt-0"
                                                                    type={showConfirmPassword ? "text" : "password"}
                                                                    placeholder="Enter your password again"
                                                                    required
                                                                />
                                                            </FormControl>

                                                            <FormMessage className="text-sm !mt-0" />

                                                        </FormItem>
                                                    )}
                                                />

                                            </div>

                                            <div className="mt-2 flex flex-col gap-3">
                                                <Button
                                                    className="w-full"
                                                    disabled={loading}
                                                    type="submit"
                                                >
                                                    {loading ? <LoadingSpinner /> : null}
                                                    Reset password
                                                </Button>

                                                <Link to="/login">
                                                    <Button
                                                        className="w-full"
                                                        disabled={loading}
                                                        type="button"
                                                        variant="outline"
                                                    >
                                                        Back to login
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>

                                    </form>

                                </Form>
                            )}


                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default ForgotPassword;
