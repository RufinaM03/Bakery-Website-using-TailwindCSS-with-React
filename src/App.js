import React, { useState } from "react";
import "./App.css"; // Ensure you have Tailwind CSS and custom styles set up

const App = () => {
  // Defining state for the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="font-sans text-gray-900">
      {/* <header className="absolute top-0 w-full flex p-4 bg-red-700 text-white justify-between items-center z-30">
        <div className="flex flex-col md:flex-row gap-6 md:gap-24">
          <div className="flex items-center gap-2">
            <img src="images/telephone.svg" alt="Phone" className="w-6 h-6" />
            <span>123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="images/time.svg" alt="Time" className="w-6 h-6" />
            <span>Mon - Sat: 8AM - 11PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4 pr-6 md:pr-12">
          <img src="images/facebook.svg" alt="Facebook" className="w-6 h-6" />
          <img src="images/twitter.svg" alt="Twitter" className="w-6 h-6" />
          <img
            src="images/instagram (2).svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </div>
      </header> */}

      <nav className="sticky top-0 w-full bg-white text-red-700 flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center p-4 shadow-md z-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="images/Sweet Treats logo red and transparent bg.png"
            alt="Logo"
            className="h-12 md:h-16"
          />
        </div>

        {/* Navigation Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <a
            href="index.html"
            className="block md:inline-block px-4 py-2 text-center hover:bg-red-700 hover:text-white rounded"
          >
            Home
          </a>
          <a
            href="product-page.html"
            className="block md:inline-block px-4 py-2 text-center hover:bg-red-700 hover:text-white rounded"
          >
            Products
          </a>
          <a
            href="shop.html"
            className="block md:inline-block px-4 py-2 text-center hover:bg-red-700 hover:text-white rounded"
          >
            Shop
          </a>
          <a
            href="contact.html"
            className="block md:inline-block px-4 py-2 text-center hover:bg-red-700 hover:text-white rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center px-3 py-2 border rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      <div className="relative mt-[0rem]">
        {" "}
        {/* Adjust margin to position below navbar */}
        <img
          src="images/bakery-shop-food-sweets.jpg"
          alt="Bakery Shop"
          className="w-full object-cover h-[60vh] md:h-[70vh]"
        />
        <div className="absolute top-24 left-16 right-1/3 text-white">
          <p className="text-xl font-semibold">Welcome to Sweet Treats</p>
          <h1 className="text-4xl font-satisfy">
            We prepare the best taste in town
          </h1>
          <p className="text-lg font-satisfy leading-8 my-4">
            Suspendisse leo odio, scelerisque id ullamcorper vitae, iaculis
            bibendum magna. Etiam convallis porttitor diam at rutrum.
            Suspendisse potenti. In commodo sapien ac congue luctus.
          </p>
          <a
            href="#"
            className="bg-red-700 text-white py-2 px-6 rounded-full hover:bg-red-800"
          >
            Check Our Products!
          </a>
        </div>
        <div className="absolute top-[0px] right-[6rem] w-full max-w-xs">
          <img
            src="images/Chef.png"
            alt="Chef"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center p-10 md:p-20">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-satisfy">
            <div className="text-red-700">Made For You</div>
            <div className="text-red-900">With Love</div>
          </div>
          <img
            src="images/seperator icon.png"
            alt="Separator"
            className="my-4"
          />
          <p className="text-lg text-red-700 font-satisfy leading-8 mb-4">
            Suspendisse leo odio, scelerisque id ullamcorper vitae, iaculis
            bibendum magna. Etiam convallis porttitor diam at rutrum.
            Suspendisse potenti. In commodo sapien ac congue luctus. Vivamus leo
            lacus, mattis a ante id, ultrices semper odio. Maecenas gravida ac
            mauris a vestibulum. Ut ac tristique nisl, vel porta nisi.
          </p>
          <a
            href="#"
            className="bg-red-700 text-white py-2 px-6 rounded-full hover:bg-red-800"
          >
            Order Now!
          </a>
        </div>
        <div className="flex-1">
          <img src="images/gallery.png" alt="Gallery" className="w-full" />
        </div>
      </div>

      <div className="bg-red-700 text-white text-center py-16">
        <div className="text-4xl font-satisfy mb-4">Need customized cake?</div>
        <a
          href="#"
          className="bg-red-800 text-white py-2 px-6 rounded-full hover:bg-red-900"
        >
          Contact Us Today!
        </a>
      </div>

      <div className="bg-red-700 text-white text-center py-16">
        <div className="text-4xl font-satisfy mb-4">Ready to Order?</div>
        <a
          href="#"
          className="bg-red-800 text-white py-2 px-6 rounded-full hover:bg-red-900"
        >
          Choose Your Item!
        </a>
      </div>

      <footer className="bg-red-700 text-white py-8">
        <div className="flex flex-col md:flex-row justify-between px-8">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-satisfy text-red-900 mb-4">
              About Sweet Treats
            </div>
            <p className="text-base font-satisfy leading-8">
              Sweet Treats bakery is a versatile and beautiful shop. This shop
              is specially designed for Bakery related items such as Cakes,
              Brownies, Biscuits etc. It comes with customized cakes, cookies
              and candies.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-satisfy text-red-900 mb-4">
              Work Timings
            </div>
            <p className="text-base font-satisfy leading-8">
              Our eat-in timings are:
              <ul className="list-disc ml-5">
                <li>Monday - Friday: 8AM - 8PM</li>
                <li>Saturday: 9AM - 4PM</li>
                <li>Sunday: closed</li>
              </ul>
            </p>
            <p className="text-base font-satisfy leading-8 mt-4">
              Our online order timings are:
              <ul className="list-disc ml-5">
                <li>Monday - Saturday: 8AM - 11PM</li>
                <li>Sunday: closed</li>
              </ul>
            </p>
          </div>
          <div>
            <div className="text-3xl font-satisfy text-red-900 mb-4">
              Peace Of Mind
            </div>
            <p className="text-base font-satisfy leading-8">
              We offer 100% money back guarantee. If you are unsatisfied with
              your purchase, just return the product within 30 days of your
              purchase and we will refund your 100% of the money. No questions
              asked! So stop waiting and order today :-)
            </p>
          </div>
        </div>
        <hr className="border-red-900 mx-8 my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center px-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="images/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 mx-2"
            />
            <img
              src="images/twitter.svg"
              alt="Twitter"
              className="w-6 h-6 mx-2"
            />
            <img
              src="images/instagram (2).svg"
              alt="Instagram"
              className="w-6 h-6 mx-2"
            />
          </div>
          <div className="text-base font-satisfy">
            Copyrights 2024 Main
            <br />
            powered by Sweet Treats
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* Other components and content */}
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
