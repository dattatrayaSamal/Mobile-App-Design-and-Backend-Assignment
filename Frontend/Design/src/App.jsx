import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Otp from "./pages/Otp";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
