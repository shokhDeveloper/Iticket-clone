import {FaShoppingCart} from "react-icons/fa"
import { useCart } from "react-use-cart"
export const ShoppingBtn = () => {
    const {items} = useCart()
    return(
        <button className="main__shopping_btn border-transparent"><FaShoppingCart/>
            <span className="shopping__count">{items.length}</span>
        </button>
    )
}