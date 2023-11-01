import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
// import About from "../Pages/About";
import Service from "../Pages/Service";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import About from "../Pages/About/About";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
       {
         path: '/',
         element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
       path: '/blog',
       element: <Blog></Blog>
      },
      {
       path: '/contact',
       element: <Contact></Contact>
      }
      ]
    },
  ]);

export default Routes;