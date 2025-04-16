import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import decision_tree from "../assets/decision-tree.gif";
import decision_tree_works from "../assets/decision-tree-iris.gif";

const LandingPage = () => {
  const navigate = useNavigate();

  const vectorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-inter">
      {/* Header */}
      <header className="px-6 py-4 shadow-md bg-white flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10 mr-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-2xl font-bold text-navy-800">
            Decision Tree Visualizer
          </h1>
        </div>
        <nav className="text-sm font-medium">
          <a
            href="/playground"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Playground
          </a>
          <a
            href="#about"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#algorithm"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Algorithm
          </a>
          <a
            href="#videos"
            className="text-black-600 hover:text-coral-500 mx-4 transition-colors duration-300"
          >
            Videos
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 text-navy-800 py-32 px-4 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-blue-300 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-60 right-10 w-96 h-96 bg-pink-100 opacity-30 rounded-full filter blur-2xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
              Visualize. Learn. Experiment.
            </h2>
            <p className="text-lg md:text-xl text-navy-700 mb-10 max-w-2xl mx-auto md:mx-0">
              Dive deep into decision trees through vivid visuals and hands-on
              exploration — no experience needed.
            </p>
            <div className="flex justify-center md:justify-start gap-6 flex-wrap">
              <motion.button
                onClick={() => navigate("/playground")}
                className="bg-coral-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-coral-600 hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎮 Launch Playground
              </motion.button>
              <motion.a
                href="#algorithm"
                className="border-2 border-navy-700 text-navy-700 px-8 py-4 rounded-full font-semibold hover:bg-navy-700 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📚 Learn the Algorithm
              </motion.a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 flex justify-center items-center "
            variants={vectorVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={decision_tree}
              alt="Decision Tree Vector"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </section>

   {/* About Section */}
<section id="about" className="py-16 px-4 bg-white relative">
  <div className="max-w-5xl mx-auto">
    <motion.h3
      className="text-3xl font-bold text-navy-800 mb-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      What is a Decision Tree?
    </motion.h3>
    <div className="relative">
      <div className="absolute left-1/2 top-16 h-[calc(100%-4rem)] w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1 */}
        <motion.div
          className="bg-teal-100 p-4 rounded-lg shadow-md relative w-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-navy-800">Classification</h4>
          <p className="text-gray-600">
            Decision trees classify data by splitting it into branches based on feature values.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-blue-100 p-4 rounded-lg shadow-md relative w-80"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-lg font-semibold text-navy-800">Regression</h4>
          <p className="text-gray-600">
            They can also predict continuous values by modeling data in a tree structure.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-indigo-100 p-4 rounded-lg shadow-md relative w-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-lg font-semibold text-navy-800">Intuitive Design</h4>
          <p className="text-gray-600">
            Decision trees are easy to interpret and visualize, making them ideal for beginners.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      <section
        id="algorithm"
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-50 pt-10"
      >
        <div className="max-w-[90%] mx-auto">
          <motion.h3
            className="text-3xl font-bold text-navy-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How the Decision Tree Algorithm Works
          </motion.h3>

          {/* Content Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            {/* Text Content as Cards */}
            <div className="space-y-6 ml-8 max-w-[80%]">
              {/* Card 1 */}
              <motion.div
                className="bg-teal-100 p-4 rounded-lg shadow-md relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.09 }}
              >
                <h4 className="text-lg font-semibold text-navy-800">
                  Select the Best Feature
                </h4>
                <p className="text-gray-600">
                  Evaluate all features using Gini Index, Entropy, or
                  Information Gain.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="bg-blue-100 p-4 rounded-lg shadow-md relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.09 }}
              >
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2"></div>
                <h4 className="text-lg font-semibold text-navy-800">
                  Split the Data
                </h4>
                <p className="text-gray-600">
                  Divide data into subsets based on feature values.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="bg-indigo-100 p-4 rounded-lg shadow-md relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.09 }}
              >
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2"></div>

                <h4 className="text-lg font-semibold text-navy-800">
                  Repeat Recursively
                </h4>
                <p className="text-gray-600">
                  Continue until stopping criteria (like max depth) are met.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                className="bg-pink-100 p-4 rounded-lg shadow-md relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.09 }}
              >
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2"></div>

                <h4 className="text-lg font-semibold text-navy-800">
                  Assign Leaf Nodes
                </h4>
                <p className="text-gray-600">
                  Each leaf gets a class label or value.
                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                className="bg-yellow-100 p-4 rounded-lg shadow-md relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.09 }}
              >
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2"></div>

                <h4 className="text-lg font-semibold text-navy-800">
                  Prune (Optional)
                </h4>
                <p className="text-gray-600">
                  Reduce overfitting by trimming the tree.
                </p>
              </motion.div>
            </div>

            {/* Image Content */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.09 }}
            >
              <img
                src={decision_tree_works}
                alt="Decision Tree Algorithm Illustration"
                className="min-w-[750px] h-96 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl font-bold text-navy-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Learn with Videos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Decision Trees Basics",
                desc: "A beginner-friendly introduction to decision trees.",
                link: "https://www.youtube.com/embed/7VeUPuFGJHk",
              },
              {
                title: "How Decision Trees Work",
                desc: "Detailed explanation of the algorithm.",
                link: "https://www.youtube.com/embed/ZVR2Way4nwQ?si=gGQJsSVTWxOy1uvS",
              },
              {
                title: "Practical Applications",
                desc: "Real-world examples of decision trees.",
                link: "https://www.youtube.com/embed/JcI5E2Ng6r4?si=hoHJmRRwjiE5mdK4",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md"
                ></iframe>
                <h4 className="text-lg font-semibold text-navy-800 mt-4">
                  {video.title}
                </h4>
                <p className="text-sm text-gray-600">{video.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 py-6 text-center text-gray-200">
        <p>© 2025 Decision Tree Visualizer. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="#"
            className="text-gray-200 hover:text-coral-500 mx-2 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-coral-500 mx-2 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-coral-500 mx-2 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
