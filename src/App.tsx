import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import React from "react";


function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Reception/>}/>
          <Route path="/floor/:index" element={<PrivateRoute><Floor/></PrivateRoute>}/>
          <Route path="/forbidden" element={<Forbidden/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
