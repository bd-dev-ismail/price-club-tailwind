import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/home'},
        {id: 3, name: 'About', path: '/home'},
        {id: 4, name: 'Orders', path: '/home'},
        {id: 5, name: 'Contact', path: '/home'},
    ]
    return (
      <>
        <nav>
          {open ? (
            <XMarkIcon
              onClick={() => setOpen(!open)}
              className="h-6 w-6 cursor-pointer"
            />
          ) : (
            <Bars4Icon
              onClick={() => setOpen(!open)}
              className="h-6 w-6 cursor-pointer"
            />
          )}
          <ul className="md:flex justify-center">
            {routes.map((route) => (
              <NavItem route={route} key={route.id}></NavItem>
            ))}
          </ul>
        </nav>
      </>
    );
};

export default Navbar;