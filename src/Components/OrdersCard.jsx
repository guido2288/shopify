import React from 'react'

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className='flex justify-between items-center px-4 my-4 w-[375px] py-4 border-[1px] rounded-lg border-[#777777]'>
      <p className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <span className='text-lg font-light'>{date}</span>
          <span className='text-lg font-light'>{totalProducts} articles</span>

        </div>
        <span className='text-lg font-bold flex items-center gap-2'>$ {totalPrice}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </span>

      </p>

    </div>
  )
}

export default OrdersCard