import React from "react";
import { AccountProvider } from "./AccountContext";
import { CartProvider } from "./CartContext";
import { LikeProvider } from "./LikeContext";
import { NotificationProvider } from "./NotificationContext";
import { PurchaceProvider } from "./PurchaceContext";
import { SearchProvider } from "./SearchContext";

const ContextWrapper = () => {
  return (
    <>
      <AccountProvider>
        <CartProvider>
          <LikeProvider>
            <NotificationProvider>
              <PurchaceProvider>
                <SearchProvider></SearchProvider>
              </PurchaceProvider>
            </NotificationProvider>
          </LikeProvider>
        </CartProvider>
      </AccountProvider>
    </>
  );
};

export default ContextWrapper;
