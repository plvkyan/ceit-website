// import { FcGoogle } from "react-icons/fc";

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
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

// Utility imports
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



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
  const handleSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    console.log("Form submitted:", data);
    // Handle form submission logic here
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
              <a href="#" className="mb-6 flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
                  className="max-h-14"
                  alt="Pamantasan ng Lungsod ng Valenzuela Logo"
                />
              </a>

              {/* Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo */}
              <a href="#" className="mb-6 flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
                  className="max-h-14"
                  alt="Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo"
                />
              </a>

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
                        
                        <Label> First Name <span className="text-destructive"> * </span> </Label>
                        <Input type="text" placeholder="John" required />
                      </div>

                      {/* Last name input container */}
                      <div className="flex flex-col gap-2 w-full">
                        <Label> Last Name <span className="text-destructive"> * </span> </Label>
                        <Input type="text" placeholder="Doe" required />
                      </div>

                    </div>





                    <div className="flex flex-col gap-2">
                      <Label> Email <span className="text-destructive"> * </span> </Label>
                      <Input type="email" placeholder="example@example.com" required />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <Label> Password <span className="text-destructive"> * </span> </Label>
                      </div>

                      <Input
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <Label> Confirm Password <span className="text-destructive"> * </span> </Label>
                      </div>

                      <Input
                        type="password"
                        placeholder="Enter your password again"
                        required
                      />
                    </div>

                    {/* Remember me checkbox */}
                    {/* <div className="flex justify-end">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}

                    <Button type="submit" className="mt-2 w-full">
                      Sign up
                    </Button>

                    {/* Sign in with Google button */}
                    {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button> */}

                  </div>
                </form>
              </Form>

              <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-muted-foreground">
                <p> Already have an account? </p>
                <a href="/login" className="text-primary hover:underline">
                  Log in
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
