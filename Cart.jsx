import { useEffect, useMemo, useState } from 'react';

const CART_KEY = 'cricket-cart';
const ORDER_KEY = 'cricket-orders';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  const syncCart = () => {
    const savedCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    setCartItems(savedCart);
  };

  useEffect(() => {
    syncCart();
    window.addEventListener('storage', syncCart);
    return () => window.removeEventListener('storage', syncCart);
  }, []);

  const subtotal = useMemo(() =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  [cartItems]);

  const handleClearCart = () => {
    localStorage.removeItem(CART_KEY);
    syncCart();
    setMessage('Cart cleared.');
  };

  const handleCheckout = () => {
    if (!cartItems.length) {
      setMessage('Add items from the shop first.');
      return;
    }

    const selectedUser = JSON.parse(localStorage.getItem('cricket-selected-user') || 'null');
    const orders = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');

    orders.unshift({
      id: Date.now(),
      user: selectedUser?.name || 'Guest shopper',
      items: cartItems,
      total: subtotal,
      createdAt: new Date().toLocaleString(),
    });

    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
    localStorage.removeItem(CART_KEY);
    syncCart();
    setLastOrderTotal(subtotal);
    setMessage(`Order placed for ${selectedUser?.name || 'Guest shopper'}. Final total: $${subtotal.toFixed(2)}.`);
  };

  return (
    <section className="page-card">
      <p className="eyebrow">Cart</p>
      <h1>Cart overview</h1>
      <p className="lede">Items added from the shop appear here automatically. You can clear the cart or place an order from this page.</p>
      {message ? <p className="success-text">{message}</p> : null}
      <div className="info-grid">
        {cartItems.length ? cartItems.map((item) => (
          <article className="mini-card" key={item.id}>
            <h2>{item.title}</h2>
            <p className="tag">{item.category}</p>
            <p>{item.quantity} × ${item.price}</p>
            <p>Line total: ${item.quantity * item.price}</p>
          </article>
        )) : <article className="mini-card"><h2>No items yet</h2><p>Add products from the shop to fill your cart.</p></article>}
      </div>
      <p className="tag" style={{ marginTop: '12px' }}>Subtotal: ${subtotal.toFixed(2)}</p>
      <p className="tag">Final total after order: ${lastOrderTotal.toFixed(2)}</p>
      <p style={{ marginTop: '12px' }}>
        <button className="btn btn-primary" type="button" onClick={handleCheckout}>Place order</button>
        <button className="btn" type="button" onClick={handleClearCart} style={{ marginLeft: '8px' }}>Clear cart</button>
      </p>
    </section>
  );
}

export default Cart;
