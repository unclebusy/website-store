import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const {goods = [], addToBasket = Function.prototype} = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className="items">
      {goods.map(item => (
          <GoodsItem key={item.key} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
  )
}

export default GoodsList;