// Imports

// Page imports
// Academics page import
import Academics from '@/pages/Academics';
// App page import
// import App from '@/App.tsx'
// Community page import
import Community from '@/pages/Community';
// Error404 page import
import Error404 from '@/pages/Error404';
// Facilities page import
import Facilities from '@/pages/Facilities';
// Home page import
import Home from '@/pages/Home.tsx'
// Login page import
import Login from '@/pages/Login';
// News page import
import News from '@/pages/News';
// Students page import
import Students from '@/pages/Students';

// Styling imports
import '@/index.css'

// Utility imports
// React Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignUp from './pages/Signup';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/academics",
    element: <Academics />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/login",
    element: <Login
      heading="Log in"
      subheading='Welcome back! Please enter your details to log in.'
      mainLogo={{
        url: "#",
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png",
        alt: "PLV Logo",
      }}
      secondaryLogo={{
        url: "#",
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png",
        alt: "PLV CEIT Logo",
      }}
      loginText="Log in"
      googleText="Log in with Google"
      signupText="Don't have an account?"
      signupUrl="/signup"
    />,
  },
  {
    path: "/signup",
    element: <SignUp
      heading="Sign up"
      subheading='Welcome! Please enter your details to create an account.'
      mainLogo={{
        url: "#",
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png",
        alt: "PLV Logo",
      }}
      secondaryLogo={{
        url: "#",
        src: "https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png",
        alt: "PLV CEIT Logo",
      }}
      signupText="Sign up"
      googleText="Sign up with Google"
      loginText="Already have an account?"
      loginUrl="/login"
    />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
