// import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignUpTextProps {
  heading?: string;
  subheading?: string;
  mainLogo: {
    url: string;
    src: string;
    alt: string;
  };
  secondaryLogo: {
    url: string;
    src: string;
    alt: string;
  };
  signupText?: string;
  googleText?: string;
  loginText?: string;
  loginUrl?: string;
}

const SignUp = ({
  heading,
  subheading,
  mainLogo,
  secondaryLogo,
  signupText,
  //   googleText = "Log in with Google",
  loginText,
  loginUrl,
}: SignUpTextProps) => {
  return (
    <section className="py-20">
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="my-auto mx-auto w-full max-w-md rounded-md px-8 py-16">

            <div className="w-full flex gap-4 mb-4">
              <a href={mainLogo.url} className="mb-6 flex items-center gap-2">
                <img src={mainLogo.src} className="max-h-14" alt={mainLogo.alt} />
              </a>
              <a href={secondaryLogo.url} className="mb-6 flex items-center gap-2">
                <img src={secondaryLogo.src} className="max-h-14" alt={secondaryLogo.alt} />
              </a>
            </div>

            <div className="mb-6 flex flex-col items-center">
              <div className="flex gap-8">
              </div>
              <div className="w-full flex gap-1 flex-col">
                <h1 className="text-2xl font-semibold">{heading}</h1>
                <p className="text-sm text-muted-foreground">{subheading}</p>
              </div>
            </div>
            <div>
              <div className="grid gap-4">

                <div className="flex flex-col gap-2">
                  <Label> Email </Label>
                  <Input type="email" placeholder="example@example.com" required />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Label> Password </Label>
                  </div>

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Label> Confirm Password </Label>
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
                  {signupText}
                </Button>

                {/* Sign in with Google button */}
                {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button> */}

              </div>
              <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{loginText}</p>
                <a href={loginUrl} className="text-primary hover:underline">
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
