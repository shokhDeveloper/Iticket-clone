import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { Alert } from "../Alert";
import { useNavigate } from "react-router";
export const ShoppingBtn = () => {
  const { token } = useSelector(({ Reducer }) => Reducer);
  const navigate = useNavigate()
  const { items } = useCart();

  const handleShopClick = () => {
    navigate("/shopping")  
    
  };
  return (
    <>
      <button
        onClick={handleShopClick}
        data-testid="shopping"
        className="main__shopping_btn border-transparent"
      >
        <FaShoppingCart />
        <span data-testid="shopping-count" className="shopping__count">
          {items.length}
        </span>
      </button>
    </>
  );
};
