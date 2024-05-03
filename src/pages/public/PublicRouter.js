import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Home, About, Logement } from "@/pages/public";
import Error from "@/_utils/Error";

const PublicRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logement />} />

          {/* <Route path="/*" element={<Layout />} />*/}

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRouter;
