import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from './CartSlice.jsx';

const money = (amount) => `₹${amount.toLocaleString('en-IN')}`;

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
          <p className="muted">{items.reduce((sum, item) => sum + item.quantity, 0)} item(s) in your cart</p>
        </div>
        <button className="secondary-button" onClick={onContinueShopping}>← Continue Shopping</button>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">🪴</div>
          <h2>Your cart is ready to grow.</h2>
          <p>You haven't added any plants yet. Explore the collection and find your next favorite.</p>
          <button className="primary-button" onClick={onContinueShopping}>Browse Plants <span aria-hidden="true">→</span></button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-product-image" src={item.image} alt={item.name} />
                <div className="cart-product-details">
                  <h3>{item.name}</h3>
                  <p className="muted">Unit price: {money(item.price)}</p>
                  <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove item</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
                <div className="cart-line-total">
                  <span className="muted">Subtotal</span>
                  <strong>{money(item.price * item.quantity)}</strong>
                </div>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <p className="eyebrow">ORDER SUMMARY</p>
            <h2>Your total</h2>
            <div className="summary-line"><span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span><span>{money(total)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-label">Calculated later</span></div>
            <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
            <button className="primary-button checkout-button" onClick={() => setCheckoutMessage('Coming Soon — checkout will be available soon!')}>Checkout <span aria-hidden="true">→</span></button>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
            <p className="secure-note">✦ A little green joy is on its way.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
