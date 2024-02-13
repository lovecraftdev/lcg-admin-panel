import Sidebar from "../src/Components/Sidebar";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import CreateCollection from "./Components/CreateCollection";
import Collections from './Components/Collections';
import Product from './Components/Product'
import Collections from './Components/Collections';
import Products from "./Components/Products";
import Customers from "./Components/Customers";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
  };
  return (
    <>
      <Toaster />
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/create-collection" element={<CreateCollection />} />
          <Route path="/customers" element={<Customers/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
