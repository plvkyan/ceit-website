

// Imports

// shadcn Component Imports
// shadcn Button Component Import
import { Button } from '@/components/ui/button';

// shadcn Separator Component Import
import { Separator } from '@/components/ui/separator';

// Hooks




// Utility Imports
// React Import
import React from 'react';

// react-router-dom useNavigate Import
import { useNavigate } from 'react-router-dom';





const Error404: React.FC = () => {



  // Hooks
  // useAuthContext Hook

  // useNavigate Hook
  const navigate = useNavigate();

  const theme = localStorage.getItem("vite-ui-theme");



  // Functions
  // Navigate back to a page function
  const navigateBack = () => {
    navigate('/home');
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center h-[100svh] md:h-[90svh] min-w-vw ">

      {theme && theme === "dark" && (
        <>
          <img
            alt=""
            className="h-[500px] max-h-[85px] md:max-h-[100px] w-auto"
            onClick={navigateBack}
            src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
          />
          <img
            alt=""
            className="h-[500px] max-h-[85px] md:max-h-[100px] w-auto"
            onClick={navigateBack}
            src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
          />
        </>
      )}

      {theme && theme === "light" && (
        <>
          <img
            alt=""
            className="h-[500px] max-h-[85px] md:max-h-[100px] w-auto"
            onClick={navigateBack}
            src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
          />
          <img
            alt=""
            className="h-[500px] max-h-[85px] md:max-h-[100px] w-auto"
            onClick={navigateBack}
            src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
          />
        </>
      )}

      <Separator orientation="vertical" className={"hidden md:block max-h-48"} />
      <Separator orientation="horizontal" className={"block md:hidden max-w-48"} />

      <div className="flex flex-col gap-2 items-center md:items-start text-center text-wrap">
        <h1 className={"text-4xl md:text-6xl"}> 404</h1>
        <p className="text-xs md:text-base text-wrap text-muted-foreground max-w-[80%]"> Oops. The page you're looking for doesn't exist. </p>
        <Button className="my-6 md:my-4 text-xs md:text-sm font-normal" onClick={navigateBack} size="sm" variant="outline"> Let's go back </Button>
      </div>

    </div>
  );
};





export default Error404;