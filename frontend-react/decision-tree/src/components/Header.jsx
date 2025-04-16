import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import decision_tree from "../assets/decision-tree.gif";
import decision_tree_works from "../assets/decision-tree-iris.gif";

const Header = () => {
  const navigate = useNavigate();
  return (
   <>
         {/* Header */}
         <header className="px-6 py-4 shadow-md bg-white flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center" >
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10 mr-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={()=>navigate("/")}

          />
          <h1 className="text-2xl font-bold text-navy-800 cursor-pointer" onClick={()=>navigate("/")}>
            Decision Tree Visualizer
          </h1>
        </div>
        <nav className="text-sm font-medium">
          <a
            href="/#Home"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/#algorithm"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Algorithm
          </a>
          <a
            href="/#videos"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Videos
          </a>
        </nav>
      </header>
   </>
  );
};

export default Header;