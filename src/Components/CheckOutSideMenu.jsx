import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../Context'
import { totalPrice } from '../utils';
import OrderCard from './OrderCard';


const CheckOutSideMenu = () => {

  const { isCheckOutSideOpen, closeCheckOutSide, cartProducts, setCartProducts, setOrder, order } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([])
  }

  return (
    <aside
      className={`${isCheckOutSideOpen ? 'flex' : "hidden"} checkout-side-menu scrollable-cards w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-blue-500 bg-white rounded-lg`}

    >
      <div className='flex justify-between items-center px-4 py-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#d13d44' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={closeCheckOutSide}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>

      <div className='flex-1'>
        {
          cartProducts.map((product) => (

            < OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>

      <div className='px-4 py-6'>
        <p className='flex justify-between items-center'>
          <span className='text-lg font-light'>Total:</span>
          <span className='text-lg font-bold'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            onClick={() => handleCheckout()}
            className="w-full bg-black py-3 text-white mt-2 rounded-lg"
          >Checkout</button>

        </Link>
      </div>

    </aside>

  )
}

export default CheckOutSideMenu