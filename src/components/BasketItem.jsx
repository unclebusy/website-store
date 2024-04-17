function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket=Function.prototype,
    incrementQuantity=Function.prototype,
    decrementQuantity=Function.prototype,
  } = props

  return (
      <li className="collection-item black-text" id={mainId}>
        {displayName} <i className="material-icons basket-quantity" onClick={() => decrementQuantity(mainId)}>remove</i>
        x {quantity}
        <i className="material-icons  basket-quantity" onClick={() => incrementQuantity(mainId)}>add</i>
        = $ {price.finalPrice * quantity}
        <span href="#!" className="secondary-content" onClick={() => removeFromBasket(mainId)}>
          <i className="material-icons black-text remove-cart">remove_shopping_cart</i>
        </span>
      </li>)

}

export default BasketItem;