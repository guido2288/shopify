import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

const Card = ({ data }) => {

  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckOutSide,
    isCheckOutSideOpen
  } = useContext(ShoppingCartContext);

  const showProduct = (product) => {
    openProductDetail()
    setProductToShow(product)
  };

  const addProductsToCart = (productData) => {
    setCartProducts([...cartProducts, productData]);
    setCount(count + 1);
    closeProductDetail()
    openCheckOutSide();

  };


  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div
          className='p-1 absolute top-0 right-0 flex justify-center items-center bg-[#3B82F6] w-6 h-6 m-2 rounded-full'
          onClick={() => addProductsToCart(data)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" color='#fff'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      )
    } else {
      return (
        <div
          className='p-1 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 rounded-full'
          onClick={() => addProductsToCart(data)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#3B82F6' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      )
    }

  }

  return (
    <div
      className='bg-white w-56 h-60 cursor-pointer rounded-lg'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data?.category}
        </span>
        <img
          src={data?.image}
          alt={data?.title}
          className='w-full h-full object-cover rounded-lg'
          onClick={() => showProduct(data)}
        />

        {
          renderIcon(data.id)
        }


      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data?.title}</span>
        <span className='text-lg font-medium'>${data?.price}</span>
      </p>
    </div>
  )
}

export default Card