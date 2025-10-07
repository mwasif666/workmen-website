import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import PswForget from "../src/pages/PswForget";
import Layout7 from "../src/pages/Layout7/Layout7";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

const routes = [
  { path: "/password-forget", component: <PswForget /> },
  { path: "/sign-up", component: <Signup /> },
  { path: "/login", component: <Login /> },

  { path: "/", component: <Layout7 /> },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/service",
    component: <Service />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/booking",
    component: <Booking />,
  },
];

export default routes;
