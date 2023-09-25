import React, { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState([]);
  const [cartProducts, setCartProducts] = useState([])

  const [isCheckOutSideOpen, setIsCheckOutSideOpen] = useState(false);



  const openProductDetail = () => {
    setIsProductDetailOpen(true)
  }
  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }

  const openCheckOutSide = () => {
    setIsCheckOutSideOpen(true)
  }
  const closeCheckOutSide = () => {
    setIsCheckOutSideOpen(false)
  }

  // Shopping Cart -Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));


  }, [items, searchByTitle]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,

      isCheckOutSideOpen,
      setIsCheckOutSideOpen,
      openCheckOutSide,
      closeCheckOutSide,

      order,
      setOrder,

      items,
      setItems,

      searchByTitle,
      setSearchByTitle,

      filteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};