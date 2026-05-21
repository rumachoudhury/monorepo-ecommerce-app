// import Link from "next/link";
// import React from "react";

// export default function About() {
//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
//       style={{
//         backgroundImage:
//           "url('/premium_photo-1675431443027-ad1f46c93c8d.avif')",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative max-w-3xl text-center text-white">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Store</h1>

//         <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
//           We create a modern shopping experience with high-quality products,
//           elegant design, and fast service for customers everywhere.
//         </p>

//         <Link
//           href="/products"
//           className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
//         >
//           Explore Products
//         </Link>
//       </div>
//     </div>
//   );
// }

// --------------------
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div
      // className="relative py-32 bg-cover bg-center flex items-center justify-center px-4"
      className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/premium_photo-1675431443027-ad1f46c93c8d.avif')",
        // "url('/photo-1492707892479-7bc8d5a4ee93.avif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          About Our Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8"
        >
          We create a modern shopping experience with high-quality products,
          elegant design, and fast service for customers everywhere.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Products
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
