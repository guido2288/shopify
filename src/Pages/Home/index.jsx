import React from 'react'
import { useContext } from 'react'
import Card from '../../Components/Card'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

const Home = () => {


  const { items, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {

      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map((item) => (
            <Card data={item} key={item.id} />
          ))
        )
      } else {
        return (
          <div>Product nos found...</div>
        )
      }

    } else {
      return (
        items?.map((item) => (
          <Card data={item} key={item.id} />
        ))
      )
    }
  }

  return (
    <Layout>

      <h1 className='font-medium text-[40px]'>Exlusive Products</h1>

      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />

      <div className='grid gap-6 my-4 grid-cols-3 w-full max-w-screen-lg'>
        {
          renderView()
        }

      </div>
      <ProductDetail />
      <CheckOutSideMenu />
    </Layout>
  )
}

export default Home