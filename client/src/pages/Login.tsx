


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
import { Input } from "@/components/ui/input";
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



const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})



const Login = () => {

  // States
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { backendUrl, setIsLoggedIn, getUserData, isLoggedIn, user } = useContext(AppContext);

  console.log(user)

  const navigate = useNavigate();

  // Effects
  // Effect for changing page title
  useEffect(() => {
    document.title = "Log in | Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology";

    if (localStorage.getItem("registrationSuccessful")) {
      // Show success toast if registration was successful
      toast.success("Registration successful! You can now log in.", {
        description: "Please enter your email and password to log in.",
        duration: 10000,
        closeButton: true,
      });
    }

    localStorage.removeItem("registrationSuccessful");
  }, []);

  useEffect(() => {
        if (isLoggedIn && user) {
            // If the user is logged in, redirect to the dashboard
            navigate("/dashboard");
        }
    }, [isLoggedIn, user]);

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Check local storage for user data


  const handleSubmit = async (values: z.infer<typeof loginFormSchema>, e: any) => {
    try {
      // Handle form submission
      // Prevent default form submission
      e.preventDefault();

      // Set loading to true
      setLoading(true);

      // This is used to send cookies with the request
      axios.defaults.withCredentials = true;

      // Post request to the backend
      const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
        email: values.email,
        password: values.password,
      });

      // Check if the response is successful
      if (data.success) {
        // Set the user data in the context
        setIsLoggedIn(true);
        // Fetch user data
        getUserData();
        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        // If the response is not successful, show an error message
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

            <div className="mb-6 flex flex-col items-center">

              <div className="flex gap-8">
              </div>

              {/* Headers */}
              <div className="w-full flex gap-1 flex-col">
                {/* Main header */}
                <h1 className="text-2xl font-semibold"> Log in </h1>
                {/* Subheading */}
                <p className="text-sm text-muted-foreground"> Welcome back! Please enter your details to log in. </p>
              </div>

            </div>



            <div>

              {/* Form container */}

              <Form {...loginForm}>

                <form onSubmit={loginForm.handleSubmit(handleSubmit)}>

                  <div className="grid gap-4">

                    {/* Email input container */}
                    <div className="flex flex-col gap-2">

                      <FormField
                        control={loginForm.control}
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

                            <FormMessage />

                          </FormItem>
                        )}
                      />

                    </div>

                    {/* Password input container */}
                    <div className="flex flex-col gap-1.5">

                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="flex flex-col gap-1.5">

                            <div className="flex justify-between items-center">
                              <FormLabel>
                                Password
                                <span className="text-destructive"> * </span>
                              </FormLabel>
                              <Link to="/forgot" className="text-end text-sm text-primary hover:underline">
                                Forgot password
                              </Link>
                            </div>

                            <FormControl>
                              <Input
                                {...field}
                                className="!mt-0"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                              />
                            </FormControl>

                            <FormMessage />

                          </FormItem>
                        )}
                      />

                    </div>

                    <Button type="submit" className="mt-2 w-full">
                      Log in
                    </Button>

                  </div>

                </form>

              </Form>

              <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-muted-foreground">
                <p> Don't have an account? </p>
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Login;
