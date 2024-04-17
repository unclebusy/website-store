import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity
  }, 0)

  return (
      <ul className="collection basket-list">
        <li className="collection-item active green darken-2">Basket</li>
        {order.length ?
            order.map(item => (
                <BasketItem
                    key={item.mainId}
                    {...item}
                    removeFromBasket={removeFromBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            )) :
            <li className="collection-item ">Basket is empty</li>
        }
        <li className="collection-item active green darken-2">
          Total price: $ {totalPrice}
        </li>
        <i className="material-icons basket-close white-text" onClick={handleBasketShow}>close</i>
        <button className="secondary-content btn-small make-order green darken-2">Make order</button>
      </ul>
  )
}

export default BasketList;