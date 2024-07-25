import { useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from "./GoodsItem";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
      <div className="items">
        {goods.map((item, index) => (
            <GoodsItem key={item.mainId} {...item} index={index} />
        ))}
      </div>
  );
}

export default GoodsList;
