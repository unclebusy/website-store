function GoodsItem(props) {
  const { mainId, displayName, displayType, price, displayAssets, addToBasket = Function.prototype } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName}/>
      </div>
      <div className="card-content">
        <p className="card-title">{displayName}</p>
        <p>Type: {displayType}</p>
      </div>
      <div className="card-action">
        <span className="right price-goods"> $ {price.finalPrice}</span>
        <button className="btn  green darken-2" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
      </div>
    </div>
  )
}

export default GoodsItem;

