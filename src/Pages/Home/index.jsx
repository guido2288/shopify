import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'

const Home = () => {

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, []);


  return (
    <Layout>
      <div className='grid gap-6 my-4 grid-cols-3 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
            <Card data={item} key={item.id} />
          ))
        }

      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home