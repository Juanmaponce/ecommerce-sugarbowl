import React from 'react'
import { useCartContext } from './CartContext'
import {Button} from '@chakra-ui/react'
import  CartItem  from './CartItem'
import CartEmpty from './CartEmpty'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'


const Cart = () => {
    const {cart, clear, totalPrice} = useCartContext();

    const history = useHistory();

    const handleRoute = () => {
        history.push('/')
    }

    const price = totalPrice();
    

    return (
     <div>
            { cart.length !== 0 ?
        (<div>
            {cart.map(cartItem => {return <CartItem item={cartItem} />})}
            <h2>price: {price}</h2>
            <Button variant="danger" onClick={() => clear()}>Clear all</Button>
            <Button variant="danger" onClick={handleRoute}>Pagar</Button>
        </div>) : (<CartEmpty />)
    }
     </div>
    )
}

export default Cart
