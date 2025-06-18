import { createContext, useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState(initialProducts);

  const findProductById = (id) => {
    return carts.find(product => product.id === id);
  };

  const themCardMoi = (product) => {
    const newId = carts.length > 0 ? Math.max(...carts.map(p => p.id)) + 1 : 1;
    const newProduct = { ...product, id: newId };
    setCarts(prev => [...prev, newProduct]);
    console.log("Đã thêm sản phẩm:", newProduct);
  };

  const updateProduct = (id, updateFields) => {
    const existingProduct = findProductById(id);
    if (!existingProduct) {
      alert("Sản phẩm không tồn tại!");
      return;
    }

    setCarts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...updateFields } : product
      )
    );
    console.log(`Đã cập nhật sản phẩm ID ${id}`);
  };

  const xoaProduct = (id) => {
    const existingProduct = findProductById(id);
    if (!existingProduct) {
      alert("Sản phẩm không tồn tại!");
      return;
    }

    setCarts(prev => prev.filter(product => product.id !== id));
    console.log(`Đã xóa sản phẩm ID ${id}`);
  };

  const tongTien = () => {
    return carts.reduce((sum, product) => sum + product.price, 0);
  };

  const tongTienTheoSoLuong = () => {
    return carts.reduce((sum, product) => sum + product.price * product.stock, 0);
  };

  return (
    <CartContext.Provider value={{ carts, themCardMoi, updateProduct, xoaProduct, tongTien }}>
      {children}
    </CartContext.Provider>
  );
};
