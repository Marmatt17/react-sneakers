import Styles from './Card.module.scss'
import React from 'react';
import AppContext from "../../context";
import ContentLoader from 'react-content-loader';
function Card ({id,title, price, imageUrl, onPlus, loading=false, added=false}) {
  const obj = {id, parentId: id, title,price,imageUrl}
  const onClickPlus =() => {
  onPlus (obj);
  }
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavourite,setIsFavourite] = React.useState(false)
  const onClickFavourite = () => {
    setIsFavourite(!isFavourite)
  }
 
    return (
      <div className={Styles.card}>
{
  loading ? <ContentLoader 
  speed={2}
  width={152}
  height={230}
  viewBox="0 0 152 230"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb">
  <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
  <rect x="0" y="104" rx="5" ry="5" width="150" height="15" /> 
  <rect x="0" y="132" rx="0" ry="0" width="100" height="15" /> 
  <rect x="0" y="174" rx="0" ry="0" width="80" height="25" /> 
  <rect x="121" y="171" rx="10" ry="10" width="32" height="32" />
</ContentLoader> 
    : 
      <>
      <div className={Styles.favourite} onClick={onClickFavourite}>
<img src={isFavourite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" className='cu-p'/>
</div>
<img width={133} height={112} src={imageUrl} alt="Sneakers" />
<h5>{title}</h5>
<div className="d-flex justify-between align-center">
<div className="d-flex flex-column">
<span>Цена:</span><b>{price}</b>
</div>

  <img className={Styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />

</div>
</>
 }
</div>
);
}
export default Card;