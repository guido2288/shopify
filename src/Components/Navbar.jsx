import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const { count, setCount } = useContext(ShoppingCartContext)

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-ligth top-0' >
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-blue-500 text-lg'>
          <NavLink
            to='/'>
            Shopify
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/menClothing'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/womanClothing'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Women's Clothing
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center  gap-3'>
        <li className='text-black/60'>
          guido2288@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛍️ {count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar