import React, { createContext, useState, useContext } from "react"
import _ from 'lodash'

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
   
	const addItem = (dataProduct, quantity) => {
		if (isInCart(dataProduct.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === dataProduct.id) {
					return { ...cartElement, quantity: cartElement.quantity + quantity };
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...dataProduct, quantity }]);
		}
	};

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    }
    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => cart.some((item) => item.id === id);
    
    const totalPrice = () => {
        return _.sumBy(cart, function(item){return item.price * item.quantity})
    }



    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

