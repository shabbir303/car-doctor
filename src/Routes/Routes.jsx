import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
// import About from "../Pages/About";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import About from "../Pages/About/About";
import Login from "../Login & signup/Login";
import SignUp from "../Login & signup/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/CheckOut/Bookings";
import PrivateRoutes from "../Login & signup/PrivateRoutes";


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
        path: 'about',
        element: <About></About>
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
       path: 'blog',
       element: <Blog></Blog>
      },
      {
       path: 'contact',
       element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'booking',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
      ]
    },
  ]);

export default Routes;