import React from "react";

import {
  BrowserRouter as Router,
   useRoutes
} from "react-router-dom";
import Home01 from "./pages/Home_v1";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Termsofuse from "./pages/Termsofuse";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./components/preloader";
import NotFound from "./pages/Notfound"
import dataJobs from "./assets/fakeData/dataJobs";
import JobSec1 from "./components/jobs/JobSec1";







const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home01", element: <Home01 /> },
    { path: "/Search", element: <Search /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/contactus", element: <ContactUs /> },
    // Add a catch-all route for pagination
    { path: "/search/page/:page", element: <JobSec1 data={dataJobs} /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default AppWrapper;
