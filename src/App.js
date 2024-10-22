import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import HelpdeskIcon from "./components/Help/HelpdeskIcon.jsx";
import Help from "./components/Help/Help.jsx";
import Checkout from "./components/Shop/Checkout/Checkout.jsx";
import PurchaseSuccess from "./components/Shop/PurchaseSuccess/PurchaseSuccess.jsx";
import TrackMyOrder from "./components/TrackMyOrder/TrackMyOrder.jsx";
import ProductDetails from "./components/Shop/ProductDetails/ProductDetails.jsx";
import MyNotifications from "./components/MyNotifications/MyNotifications.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Like from "./components/Like/Like.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shop from "./components/Shop/Shop/Shop.jsx";
import Account from "./components/Account/Account.jsx";
import Mobilemenu from "./components/Mobilemenu/Mobilemenu.jsx";
import Head from "./components/Header/Head.jsx";
import Search from "./components/Header/Search.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AccountProvider } from "./context/AccountContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { PurchaceProvider } from "./context/PurchaceContext.jsx";
import { LikeProvider } from "./context/LikeContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <LikeProvider>
          <SearchProvider>
            <AccountProvider>
              <PurchaceProvider>
                <NotificationProvider>
                  <ScrollToTop />
                  <Head />
                  <Search />
                  <Switch>
                    <Route path="/" exact>
                      <Shop />
                    </Route>
                    <Route path="/account" exact>
                      <Account />
                    </Route>
                    <Route path="/MyNotifications" exact>
                      <MyNotifications />
                    </Route>
                    <Route path="/Checkout" exact>
                      <Checkout />
                    </Route>
                    <Route path="/purchase-success" exact>
                      <PurchaseSuccess />
                    </Route>
                    <Route path="/track-my-order" exact>
                      <TrackMyOrder />
                    </Route>
                    <Route path="/product/:id" exact>
                      <ProductDetails />
                    </Route>
                    <Route path="/cart" exact>
                      <Cart />
                    </Route>
                    <Route path="/like" exact>
                      <Like />
                    </Route>
                    <Route path="/Help" exact>
                      <Help />
                    </Route>
                  </Switch>
                  <Mobilemenu />
                </NotificationProvider>
              </PurchaceProvider>
            </AccountProvider>
          </SearchProvider>
        </LikeProvider>
      </CartProvider>
      <Footer />
      <HelpdeskIcon />
    </Router>
  );
}

export default App;
