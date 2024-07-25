import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const { mainId, displayName, displayType, price, displayAssets, index } = props;
  const { addToBasket } = useContext(ShopContext);

  const imageUrl = displayAssets[0]?.full_background || "https://via.placeholder.com/150";

  return (
      <div className="card" key={mainId}>
        <div className="card-image">
          <img src={imageUrl} alt={displayName} />
        </div>
        <div className="card-content">
          <p className="card-title">{displayName}</p>
          <p>Type: {displayType}</p>
        </div>
        <div className="card-action">
          <span className="right price-goods">$ {price.finalPrice}</span>
          <button
              className="btn green darken-2"
              onClick={() => addToBasket({ mainId, displayName, price, index })}
          >
            Buy
          </button>
        </div>
      </div>
  );
}

export default GoodsItem;
