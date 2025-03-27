import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/login/Login";
import Register from "../features/auth/register/Register";
import Landing from "../features/landing/landing";
import Layout from "../features/dashboard/Layout";
import Products from "../features/dashboard/products/Products";
import Clients from "../features/dashboard/clients/Clients";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<h1>Product home</h1>} />
      <Route path="/clients" element={<h1>Client home</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route path="products" element={<Products />} />
        <Route path="clients" element={<Clients />} />
      </Route>

      <Route path="*" element={<h1> Not Found</h1>} />
    </Routes>
  );
};

export default RouteComponent;
