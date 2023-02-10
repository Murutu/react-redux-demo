import CartItem from "./CartItem"
import {useDispatch ,useSelector} from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch()
  const {cartItems, total, amount, id} = useSelector((store) => store.cart);

  if(amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id} {...item}/>
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
        <h4>
          total <span>${total}</span>
        </h4>
        </div>
      </footer>
      <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>clear cart</button>
    </section>
  )
}
export default CartContainer

/*
import { useDispatch } from "react-redux"
import {clearCart} from "../"

const CartContainer = () => {
  const dispatch = useDispatch()
}


<button onClick={() => dispatch(clearCart())}></button>
export default CartContainer
*/