import React from "react"
import { useCart } from "../hooks/useCart"
function Header(props) {
  const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
         <img width={40} height={40} src="/img/logo.png"/>
         <div className="ml-15">
           <h3 className="text-uppercase" > React Sneakers</h3>
           <p className="opacity-5">Магазин лучших кроссовок</p>
         </div>
         </div>
         <ul className="d-flex">
           <li onClick={props.onClickCart} className="mr-30 cu-p"> 
             <img width={18} height={18} src="cart.png" alt="Корзина"/>
   <span>{totalPrice} руб.</span>
           </li>
           <li>
           <img className="mr-30 cu-p" width={20} height={20} src="/img/heart.svg" alt="Закладки"/>
           </li>
           <li >
           <img className="mr-10 cu-p" width={20} height={20} src="user.png" alt="Пользователь"/>
           </li>
         </ul>
        </header>
    )
}
export default Header