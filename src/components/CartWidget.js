import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from './CartContext'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {cart} = useCartContext();

    const totalItems = () => {
       return _.sumBy(cart, function(item){return item.quantity})
    }
    const cartQuantity = 0 + totalItems();
    console.log(cartQuantity)

    return (
        <div className="d-flex align-items-center mx-3">
            <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Link>
            <p>({cartQuantity})</p>
        </div>
    )
}

export default CartWidget
