import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MarketingHub from "../Pages/MarketingHub";
import SalesHub from "../Pages/SalesHub";
import PrivateRoute from "../Components/PrivateRoute";
import Pricing from "../Pages/Pricing";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/marketinghub"
        element={
          <PrivateRoute>
            <MarketingHub />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/saleshub"
        element={
          <PrivateRoute>
            <SalesHub />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/pricing"
        element={
          <PrivateRoute>
            <Pricing />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
