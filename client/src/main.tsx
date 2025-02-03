// Imports

// Page imports
// Academics page import
import Academics from '@/pages/Academics';
// App page import
import App from '@/App.tsx'
// Community page import
import Community from '@/pages/Community';
// Error404 page import
import Error404 from '@/pages/Error404';
// Facilities page import
import Facilities from '@/pages/Facilities';
// Home page import
import Home from '@/pages/Home.tsx'
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
