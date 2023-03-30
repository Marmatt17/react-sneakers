import React from "react"
import Info from "../info"
import styles from './Drawer.module.scss'
import { useCart } from "../../hooks/useCart"
function Drawer({onClose, onRemove, items=[],opened}) {
  const [isOrderComplete,setIsOrderComplete] = React.useState(false)
  const onClickOrder =() => {

    setIsOrderComplete(true)
    setCartItems([])
  }

  const {setCartItems,cartItems,totalPrice} = useCart()
      return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''} `}>
        <div className={styles.drawer}>
  <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
  {
    items.length > 0 ? <><div className="items">
    {
      items.map((obj) => (
        <div key={obj.id} className="cartItem d-flex align center mb-20">
      <div style={{backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
      <div className="mr-20 flex">
        <p className="mb-5">{obj.title}</p>
        <b>{obj.price}</b>
      </div>
      <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
      ))
    }
    
  </div> 
  
  <div className="cartTotalBlock"><ul>
  <li>
    <span>Итого:</span>
    <div></div>
    <b>{totalPrice} руб.</b>
  </li>
  <li>
    <span>Налог 5%:</span>
    <div></div>
    <b>{totalPrice/100*5} руб.</b>
  </li>
</ul>
  <button onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
  </div> </>
  : 
  <Info 
  title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
  description={isOrderComplete ? "Ваш заказ скоро будет передан курьерской доставкой" : "Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ"}
  image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>
  
  
  }
  

</div>
</div>
    )
}
export default Drawer