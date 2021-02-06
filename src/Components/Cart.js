import React, { useState } from "react";
import formatCurrency from "../utill";
import Fade from "react-reveal/Fade";
function Cart({ cartItems, removeFromCart, createOrder }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [inforCheckout, setInforCheckout] = useState();
  const [inforOrder, setInforOrder] = useState();
  const handleInput = (event) => {
    event.preventDefault();
    setInforCheckout({
      ...inforCheckout,
      [event.target.name]: event.target.value,
    });
  };
  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      ...inforCheckout,
      cartItems: cartItems,
    };
    createOrder(order);
  };
  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img alt={item.image} src={item.image}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        ${item.price} x {item.count}
                        <button
                          className="button"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length === 0 ? (
            ""
          ) : (
            <div className="cart">
              <div className="total">
                <div>
                  {"Total: "}
                  {formatCurrency(
                    cartItems.reduce(
                      (acc, cur) => acc + cur.price * cur.count,
                      0
                    )
                  )}
                </div>

                <button
                  className="button primary"
                  onClick={() => {
                    setShowCheckout(true);
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          )}
          {showCheckout && cartItems.length !== 0 ? (
            <div className="cart">
              <Fade right cascade>
                <form onSubmit={handleOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Adress</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <button className="button primary" type="submit">
                        Create order
                      </button>
                    </li>
                  </ul>
                </form>
              </Fade>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
