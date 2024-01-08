import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Shop from "./components/shops/Shop.jsx"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Like from "./common/Cart/Like"
import Contact from "./components/contact/Contact"
import Mobilemenu from "./common/nav-mobile/Mobile-menu"

function App() {
  const [CartItem, setCartItem] = useState([])
  const [LikeItem, setLikeItem] = useState([])
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const addToLike = (product) => {
    const productExit = LikeItem.find((item) => item.id === product.id)
    if (productExit) {
      setLikeItem(LikeItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setLikeItem([...LikeItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
           setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const removeQty = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
}
  const removeLike = (product) => {
    setLikeItem(LikeItem.filter((item) => item.id !== product.id))
}


  return (
        <Router>
          <Header CartItem={CartItem} LikeItem={LikeItem} />
          <Switch>
            <Route path='/' exact>
              <Shop  addToCart={addToCart} addToLike={addToLike} />
            </Route>
            <Route path='/cart' exact>
              <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeQty={removeQty} />
            </Route>
            <Route path='/like' exact>
              <Like LikeItem={LikeItem} addToLike={addToLike} decreaseQty={decreaseQty} removeLike={removeLike} />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
          </Switch>
          <Mobilemenu CartItem={CartItem} LikeItem={LikeItem}/>
          <Footer/>
        </Router>
  )
}

export default App
