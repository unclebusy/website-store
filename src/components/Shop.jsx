import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";

import {ShopContext} from "../context";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
  const {goods, setGoods, loading, order, isBasketShow, alertName, closeAlert} = useContext(ShopContext);

  useEffect( function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
        .then(data => {
          setGoods(data.shop);
        });
  }, []);

  useEffect(() => {
    if (alertName) {
      const timerId = setTimeout(closeAlert, 3000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [alertName, closeAlert]);

  return (
      <main className="container content">
        <Cart />
        {loading ? <Preloader /> : <GoodsList goods={goods}/>}
        {isBasketShow &&
            <BasketList />
        }
        {alertName && <Alert />}
      </main>
  )
}

export default Shop;
