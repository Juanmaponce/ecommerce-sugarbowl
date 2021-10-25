import React, { createContext, useState, useContext } from "react"

export const CartContext = createContext();

export const useCartContext =() =>useContext(CartContext)

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const nuevoCart =cart.map((cartElement)=>{
                if (cartElement.id === item.id){
                    return {...cartElement, quantity: cartElement.quantity + quantity}
                }else return cartElement
                
            })
            setCart(nuevoCart)
        }else{
            setCart((antes)=> [...antes,{...item,quantity}])
        } 
    }
    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    }
    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        cart.some(item => item.id === itemId)
    }


    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

