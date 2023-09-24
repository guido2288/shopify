import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'



const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (index === 'last') index = order?.length - 1;

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative'>

        <Link to={"/my-orders"} className="absolute left-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>


      </div>
      <div className='flex flex-col w-[380px]'>
        {
          order?.[index]?.products.map((product) => (

            < OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder