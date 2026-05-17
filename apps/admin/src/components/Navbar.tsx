// "use client";

// import { SearchIcon } from "lucide-react";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [search, setSearch] = useState("");

//   const handleSearch = () => {
//     console.log(handleSearch);
//     setSearch(""); //clear input
//   };
//   return (
//     <div className="w-full h-20 bg-gray-900 text-white flex items-center justify-center">
//       <div className="flex items-center w-96 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2">
//         <SearchIcon
//           onClick={handleSearch}
//           className="text-gray-400 w-4 h-4 mr-2"
//         />

//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleSearch();
//             }
//           }}
//           type="text"
//           placeholder="Search..."
//           className="bg-transparent outline-none w-full text-white"
//         />
//       </div>
//     </div>
//   );
// }
