import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

const ProductDetail = () => {

  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : "hidden"} w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-blue-500 bg-white rounded-lg`}

    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#d13d44' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={closeProductDetail}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
      <div className='flex flex-col justify-center p-4 h-full'>
        <figure>
          <img
            src={productToShow.image}
            alt={productToShow.title}
            className='w-[50%] h-[280px] rounded-lg object-contain'
          />
        </figure>
        <p className='flex justify-between items-center'><span className='font-bold'>{productToShow.title}</span><span className='font-bold text-[20px]'>$ {productToShow.price}</span></p>


        <span className='text-black/60 text-[14px]'>{productToShow.description}</span>

      </div>
    </aside>
  )
}

export default ProductDetail