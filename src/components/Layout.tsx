import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  cart: { product: Product; quantity: number }[];
  totalItems: number;
  totalPrice: number;
  removeProduct: (id: number) => void;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  cart,
  totalItems,
  totalPrice,
  removeProduct,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        removeProduct={removeProduct}
      />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
