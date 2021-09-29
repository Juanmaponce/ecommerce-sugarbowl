import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center mx-3">
            <a href="/" className="text-secondary"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a>
        </div>
    )
}

export default CartWidget
