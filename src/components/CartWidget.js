import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from './CartContext'
import _ from 'lodash'

const CartWidget = () => {
    const {cart} = useCartContext();

    const totalItems = () => {
       return _.sumBy(cart, function(item){return item.quantity})
    }
    const cartQuantity = 0 + totalItems();
    console.log(cartQuantity)

    return (
        <div className="d-flex align-items-center mx-3">
            <a href="/" className="text-secondary"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a>
            <p>({cartQuantity})</p>
        </div>
    )
}

export default CartWidget
