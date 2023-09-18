import React, { createContext, useState } from 'react'

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
      closeCheckOutSide
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};