import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Orders", path: "/orders" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <nav className="bg-purple-300 p-4 w-ful">
        <div
          onClick={() => setOpen(!open)}
          className="h-6 w-6 cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars4Icon />}
        </div>
        <ul className={`md:flex bg-purple-300 justify-center md:static absolute duration-800 ease-in w-full ${open? 'top-12 left-0': 'top-[-120px]'}`}>
          {routes.map((route) => (
            <NavItem route={route} key={route.id}></NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
