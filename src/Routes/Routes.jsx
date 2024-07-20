import Home from "../Pages/Home";
import About from "../Pages/About";
import Speakers from "../Pages/Speakers";
import Schedule from "../Pages/Schedule";
import Contact from "../Pages/Contact";
import Blogs from "../Pages/Blogs";
import Blog_Details from "../Components/Blogs/Blog_Details/Blog_Details";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:blogID",
    element: <Blog_Details />,
  },
];

export default routes;
