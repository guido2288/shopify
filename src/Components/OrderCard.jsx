import React from 'react'
import { useContext } from 'react'

const OrderCard = (props) => {

  const { title, imageUrl, price, handleDelete, id } = props;

  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon =
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer" color='#777777'
        onClick={() => handleDelete(id)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
  }

  return (
    <div className='flex justify-between items-center mx-4 py-4 border-b-[1px] border-[#777777]'>
      <div className='flex items-center gap-2'>
        <figure className='w-12 h-12'>
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-bold'>${price}</p>
        {
          renderXMarkIcon
        }
      </div>

    </div>
  )
}

export default OrderCard