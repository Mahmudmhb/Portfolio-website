import portfolio1 from "../../assets/portfolio/home travelwp.png";
import portfolio2 from "../../assets/portfolio/cleanco.png";
import portfolio3 from "../../assets/portfolio/bistro-boss.png";
import portfolio4 from "../../assets/portfolio/home lota-online-shop.png";
import portfolio5 from "../../assets/portfolio/Car Rental Reservation System.png";
import portfolio6 from "../../assets/portfolio/Mechanical Keyboard Shop.png";

export const portfolioItems = [
  {
    id: 5,
    title: "Mechanical Keyboard Shop",
    image: portfolio6,
    description:
      "An E-Commerce Platform for browsing, searching, and purchasing mechanical keyboards.",
    features: [
      "Search functionality for products",
      "Filter and sorting by price range",
      "Shopping cart management",
      "Order management and order history",
      "Responsive design with modern UI",
      "Informative About Us and Contact Us pages",
      "Alerts for potential data loss on page refresh with items in the cart",
    ],
    technology:
      "React, TypeScript, Redux, Chakra UI, React Hook Form, Node.js, Express, MongoDB, Axios, ESLint, Prettier",
    demoLink: "https://mechanical-keyboard-shop-mu.vercel.app/",
    clientLink:
      "https://github.com/Mahmudmhb/Mechanical-Mechanical-Keyboard-Shop",
    serverLink: "https://github.com/Mahmudmhb/mechanical-keyboard-shop-server",
  },
  {
    id: 6,
    title: "Car Rental Reservation System",
    image: portfolio5,
    description:
      "A car booking system with user authentication and booking management.",
    features: [
      "Browse and view car details",
      "User authentication for login and signup",
      "Car booking and management through user dashboard",
      "Admin panel for managing users and car listings",
      "Protected routes for secure access",
      "Responsive design using Tailwind CSS",
    ],
    technology:
      "React, Vite, TypeScript, Redux, Tailwind CSS, Node.js, Express, MongoDB",
    demoLink: "https://rental-car-reservation.netlify.app//",
    clientLink: "https://github.com/Mahmudmhb/Car-Rental-Reservation-System",
    serverLink:
      "https://github.com/Mahmudmhb/Car-Rental-Reservation-System-Backend",
  },
  {
    id: 1,
    title: "TravelWp Website",
    image: portfolio1,
    description:
      "A platform for tourists to book tours and select guides with role-based dashboards.",
    features: [
      "Role-based access for users and admins",
      "Secure login with Google Sign-In and email/password",
      "Tourist dashboard allows tour deletion and payment",
      "Admin role management for users and guides",
    ],
    technology:
      "ReactJS, React Router, Tailwind, DaisyUI, Sweetalert2, Axios, Tanstack Query, Swiper, Cors, React Icons, React Helmet, NodeJS, ExpressJS, MongoDB, Firebase, Dotenv",
    demoLink: "https://travelwp-b7eb6.web.app/",
    clientLink: "https://github.com/Mahmudmhb/travelwp-client",
    serverLink: "https://github.com/Mahmudmhb/travelwp-server",
  },
  {
    id: 2,
    title: "Cleanin-co Services",
    image: portfolio2,
    description:
      "A service-related website for scheduling and managing bookings.",
    features: [
      "Home page displays available services",
      "User dashboard to view and manage booked services",
      "Service addition with status update options for owners",
    ],
    technology:
      "ReactJS, React Router, Tailwind, DaisyUI, Sweetalert2, Axios, Tanstack Query, Swiper, Cors, React Icons, React Helmet, NodeJS, ExpressJS, MongoDB, Firebase, Dotenv",
    demoLink: "https://cleaninco-2a1c2.web.app/",
    clientLink: "https://github.com/Mahmudmhb/cleaninco-client",
    serverLink: "https://github.com/Mahmudmhb/cleaninco-server",
  },
  {
    id: 3,
    title: "Bistro-boss Restaurant",
    image: portfolio3,
    description: "A restaurant platform for food ordering and table booking.",
    features: [
      "User dashboard for food selection and payment",
      "Admin controls to add or delete users and food items",
      "Modern UI design with Firebase authentication",
    ],
    technology:
      "ReactJS, React Router, Tailwind, DaisyUI, Sweetalert2, Axios, Tanstack Query, Swiper, Cors, React Icons, React Helmet, NodeJS, ExpressJS, MongoDB, Firebase, Dotenv",
    demoLink: "https://bistro-boss.web.app/",
    clientLink: "https://github.com/Mahmudmhb/bistro-boss-client",
    serverLink: "https://github.com/Mahmudmhb/bistro-boss-server",
  },
  {
    id: 4,
    title: "Lota Online Shop",
    image: portfolio4,
    description:
      "A full-featured e-commerce website with dynamic cart functionalities.",
    features: [
      "Built with the MERN stack (MongoDB, Express, React, Node.js)",
      "Search, filter, and sort capabilities with a real-time dynamic shopping cart",
      "Firebase login/registration integration",
    ],
    technology:
      "Tailwind, NodeJS, ExpressJS, MongoDB, JavaScript, ReactJS, Firebase, Axios, Cors",
    demoLink: "https://lota-online-shop.web.app/",
    clientLink: "https://github.com/Mahmudmhb/lota-online-shop-client",
    serverLink: "https://github.com/Mahmudmhb/lota-online-shop-server",
  },
];
