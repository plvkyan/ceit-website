


// Imports
import { Button } from "@/components/ui/button";
// Import shadcn form components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useState, useEffect, useContext } from "react";

// Utility imports
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { AppContext }  from "@/contexts/AppContext.tsx";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";


const signUpFormSchema = z.object({

  firstName: z.string().min(1,
    { message: "First name cannot be empty." }
  ),
  lastName: z.string().min(1,
    { message: "Last name cannot be empty." }
  ),
  email: z.string().email(
    { message: "Please enter a valid email address." }
  ),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
})
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    }
  );




const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const { backendUrl, isLoggedIn, user  } = useContext(AppContext);

  // Effects
  // Effect for changing page title
  useEffect(() => {
    document.title = "Sign up | PLV CEIT";
  }, []);

  useEffect(() => {
        if (isLoggedIn && user) {
            // If the user is logged in, redirect to the dashboard
            navigate("/dashboard");
        }
    }, [isLoggedIn, user]);

  const signUpForm = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Function to handle form submission
  const handleSubmit = async (value: z.infer<typeof signUpFormSchema>, e: any) => {
    console.log("Form submitted:", value);

    try {
      // prevent default form submission`
      e.preventDefault();

      console.log(backendUrl);
      
      // This is used to send cookies with the request
      axios.defaults.withCredentials = true;

      // If the registration is sent, show a loading toast
      toast.loading("Registering user...", {
        description: "Please wait while we create your account. This may take a while.",
      });

      // Send a POST request to the backend with the form data
      const {data} = await axios.post(`${backendUrl}/api/auth/register`, {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
      });

      if (data.success) {
        localStorage.setItem("registrationSuccessful", "true");
        window.location.href = "/login";
        toast.dismiss();
      }
      
    } catch (error) {
      // Dismiss the loading toast
      toast.dismiss();
      
      // Check if the error is an Axios error
      if (axios.isAxiosError(error)) {
        // If the error is an Axios error, check if it has a response
        if (error.response) {
          // If the error has a response, show an error toast with the response data
          toast.error(error.response.data.message || "An error occurred while submitting the form.", {
            description: "Please check your input and try again.",
            duration: 15000,
            closeButton: true,
          });
        }
      }
      
      // If there is an error, show an error toast
      toast.error("An error occurred while submitting the form. Please try again.", {
        description: "If the problem persists, please contact support.",
        duration: 15000,
        closeButton: true,
      });
      console.error("Error submitting form:", error);
    }
  };

  return (

    // Main container
    <section className="py-16">

      {/*  */}
      <div className="">

        <div className="flex flex-col gap-4">

          <div className="my-auto mx-auto w-full max-w-md rounded-md px-8 py-16">

            {/* University logos */}
            <div className="w-full flex gap-4 mb-4">

              {/* Pamantasan ng Lungsod ng Valenzuela Logo */}
              <Link to="/" className="mb-6 flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
                  className="max-h-14"
                  alt="Pamantasan ng Lungsod ng Valenzuela Logo"
                />
              </Link>

              {/* Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo */}
              <Link to="/" className="mb-6 flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
                  className="max-h-14"
                  alt="Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo"
                />
              </Link>

            </div>

            {/* Sign up Header */}
            <div className="mb-6 flex flex-col items-center">

              <div className="flex gap-8">
              </div>

              {/* Headers */}
              <div className="w-full flex gap-1 flex-col">
                {/* Main header */}
                <h1 className="text-2xl font-semibold"> Sign up </h1>
                {/* Subheader */}
                <p className="text-sm text-muted-foreground"> Welcome! Please enter your details to create an account </p>
              </div>

            </div>



            <div>

              {/* Form container */}

              <Form {...signUpForm}>

                <form onSubmit={signUpForm.handleSubmit(handleSubmit)}>

                  <div className="grid gap-4">

                    {/* Name input container */}
                    <div className="flex flex-row gap-4 w-full">

                      {/* First name input container */}
                      <div className="flex flex-col gap-2 w-full">

                        <FormField
                          control={signUpForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">

                              <FormLabel>
                                First Name
                                <span className="text-destructive"> * </span>
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  className="!mt-0"
                                  type="text"
                                  placeholder="John"
                                  required
                                />
                              </FormControl>

                            </FormItem>
                          )}
                        />

                      </div>

                      {/* Last name input container */}
                      <div className="flex flex-col gap-2 w-full">

                        <FormField
                          control={signUpForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">

                              <FormLabel>
                                Last Name
                                <span className="text-destructive"> * </span>
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  className="!mt-0"
                                  type="text"
                                  placeholder="Doe"
                                  required
                                />
                              </FormControl>

                            </FormItem>
                          )}
                        />

                      </div>

                    </div>

                    <div className="flex flex-col gap-2">

                      <FormField
                        control={signUpForm.control}
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
                          </FormItem>
                        )}
                      />

                    </div>

                    <div className="flex flex-col gap-2">

                      <FormField
                        control={signUpForm.control}
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

                          </FormItem>
                        )}
                      />

                    </div>

                    <div className="flex flex-col gap-2">

                      <FormField
                        control={signUpForm.control}
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

                          </FormItem>
                        )}
                      />

                    </div>

                    <Button type="submit" className="mt-2 w-full">
                      Sign up
                    </Button>

                  </div>
                </form>
              </Form>

              <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-muted-foreground">
                <p> Already have an account? </p>
                <Link to="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
