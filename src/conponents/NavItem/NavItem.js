import React from 'react';

const NavItem = ({route}) => {
    return (
        <>
        <li className='mx-4'>
             <a href={route.path}>{route.name}</a>
        </li>
        </>
    );
};

export default NavItem;