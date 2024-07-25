import { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

function BasketList() {
  const { order = [], handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
      <ul className="collection basket-list">
        <li className="collection-item active green darken-2">Basket</li>
        {order.length > 0 ? (
            order.map(item => (
                <BasketItem
                    key={item.mainId}
                    {...item}
                    quantity={item.quantity}
                />
            ))
        ) : (
            <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active green darken-2">
          Total price: $ {totalPrice}
        </li>
        <li className="collection-item">
          <button className="secondary-content btn-small make-order green darken-2">Make order</button>
        </li>
        <i className="material-icons basket-close white-text" onClick={handleBasketShow}>close</i>
      </ul>
  );
}

export default BasketList;
