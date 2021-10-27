import React from 'react'
import { useCartContext } from './CartContext'
import {Button} from 'react-bootstrap'
import  CartItem  from './CartItem'
import CartEmpty from './CartEmpty'
import _ from 'lodash'


const Cart = () => {
    const {cart, clear} = useCartContext();
    console.log(cart.length)
    const totalPrice = () => {
        return _.sumBy(cart, function(item){return item.price * item.quantity})
    }
    const price = totalPrice();
    console.log(price)
    return (
     <div>
            { cart.length !== 0 ?
        (<div>
            {cart.map(cartItem => {return <CartItem item={cartItem} />})}
            <h2>precio total: ${price}</h2>
            <Button variant="danger" onClick={() => clear()}>Clear all</Button>
        </div>) : (<CartEmpty />)
    }
     </div>
    )
}

export default Cart
