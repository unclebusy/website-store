import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, orderIndex) => {
        if (orderIndex === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      })

      setOrder(newOrder)
    }
    setAlertName(item.displayName)
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const incrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if(el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el
      }
    });
    setOrder(newOrder);
  };

  const decrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if(el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return el
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('')
  }

  useEffect( function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
      .then(data => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
  }, []);

  return (
      <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
        {isBasketShow &&
            <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
            />
        }
        {alertName ? <Alert name={alertName} closeAlert={closeAlert}/> : null}
      </main>
  )
}

export default Shop;