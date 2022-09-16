import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import Home from "./pages/Home";


const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
  ];
  
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;