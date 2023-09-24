import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

const MyOrders = () => {

  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative'>
        <h1 className='font-medium text-xl'>MyOrders</h1>
      </div>

      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }

    </Layout>
  )
}

export default MyOrders