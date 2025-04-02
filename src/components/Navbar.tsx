import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div
              className="absolute w-full top-2 bottom-0 blur-md"
              style={{
                background:
                  "linear-gradient(to right, #f87bff, #fb92cf, #ffdd9b, #c2f0b1, #2fd8fe)",
              }}
            ></div>{" "}
            <Image
              src={logoImage}
              alt="SaaS logo"
              className=" h-12 w-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className=" text-white" />
          </div>
          <nav className=" gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className=" text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className=" text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className=" text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className=" text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className=" text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className=" bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

// import Image from "next/image";
// import logoImage from "../assets/images/logosaas.png";
// import MenuIcon from "../assets/icons/menu.svg";

// export const Navbar = () => {
//   return (
//     <div className=" bg-black">
//       <div className=" px-4">
//         <div className=" py-4 flex items-center justify-between">
//           <div className=" relative">
//             <div
//               className=" absolute w-full top-2 bottom-0 blur-md"
//               style={{
//                 background:
//                   "linear-gradient(to right, #f87bff, #fb92cf, #ffdd9b, #c2f0b1, #2fd8fe)",
//               }}
//             ></div>
//             <Image
//               src={logoImage}
//               alt="Saas logo"
//               className=" h-12 w-12 relative"
//             />
//           </div>
//           <div className=" border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
//             <MenuIcon className=" text-white" />
//           </div>
//           <nav className=" hidden gap-6 items-center sm:flex">
//             <a
//               href="#"
//               className=" text-opacity-60 text-white hover:text-opacity-100 transition"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className=" text-opacity-60 text-white hover:text-opacity-100 transition"
//             >
//               Features
//             </a>
//             <a
//               href="#"
//               className=" text-opacity-60 text-white hover:text-opacity-100 transition"
//             >
//               Updates
//             </a>
//             <a
//               href="#"
//               className=" text-opacity-60 text-white hover:text-opacity-100 transition"
//             >
//               Help
//             </a>
//             <a
//               href="#"
//               className=" text-opacity-60 text-white hover:text-opacity-100 transition"
//             >
//               Customers
//             </a>
//             <button className=" bg-white py-2 px-4 rounded-lg">
//               Get for free
//             </button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
