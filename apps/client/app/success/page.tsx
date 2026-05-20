// "use client";

// import { CheckCircle } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function SuccessPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
//         {/* Icon */}
//         <div>
//           <CheckCircle className="w-16 h-16" />
//         </div>
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">
//           Order Successful
//         </h1>
//         {/* Message */}
//         <p className="text-gray-500 mb-6">
//           Thank you for your purchase! Your order has been placed successfully.
//         </p>

//         {/* Action Button */}
//         {/* <Link
//           href="/"
//           className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
//         >
//           Go Back Home
//         </Link> */}

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/"
//             className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
//           >
//             Go Back Home
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// ---------------
"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        {/* Icon animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Successful 🎉
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          Thank you for your purchase! Your order has been placed successfully.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
