import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Aboutus from "./pages/Aboutus/Aboutus";
import Blog from "./pages/Blog/Blog";
import Contactus from "./pages/Contactus/Contactus";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contactus />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
