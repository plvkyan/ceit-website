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

// Context imports
// Import AppContextProvider from AppContext.tsx
import { AppContextProvider } from '@/contexts/AppContext';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import { Toaster } from "@/components/ui/sonner"
import Dashboard from './pages/Dashboard';
import NewsPage1 from './components/ui/news-page';
import CreateNews from './pages/CreateNews';
import EmailVerification from './pages/EmailVerification';
import Sample from './pages/Sample';

import { TooltipProvider } from "@/components/ui/tooltip"


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
    path: "/news/april-joy-yapcengco-ends-her-run-with-grace-grit-and-glory",
    // This is a specific news page, you can add more as needed
    element: <NewsPage1 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/email-verification",
    element: <EmailVerification />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-news",
    element: <CreateNews  />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
    <AppContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AppContextProvider>
    </TooltipProvider>
  </StrictMode>,
)
