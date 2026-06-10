import { useEffect, useState } from 'react';

const ORDER_KEY = 'cricket-orders';

const sampleUsers = [
  { id: 1, name: 'Customer Account', username: 'customer', email: 'customer@example.com', phone: '+91 90000 00000', city: 'Cricket City' },
];

function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('cricket-selected-user') || 'null');
    const savedOrders = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');

    setSelectedUser(savedUser);
    setOrders(savedOrders);
  }, []);

  const chooseUser = (user) => {
    setSelectedUser(user);
    localStorage.setItem('cricket-selected-user', JSON.stringify(user));
    setMessage(`${user.name} is now selected for checkout.`);
  };

  const placeOrderForUser = (user) => {
    const cartItems = JSON.parse(localStorage.getItem('cricket-cart') || '[]');

    if (!cartItems.length) {
      setMessage('Add items to the cart before placing an order for this account.');
      return;
    }

    const nextOrders = [
      {
        id: Date.now(),
        user: user.name,
        items: cartItems,
        total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        createdAt: new Date().toLocaleString(),
      },
      ...orders,
    ];

    localStorage.setItem(ORDER_KEY, JSON.stringify(nextOrders));
    localStorage.setItem('cricket-selected-user', JSON.stringify(user));
    setOrders(nextOrders);
    setSelectedUser(user);
    localStorage.removeItem('cricket-cart');
    setMessage(`Order placed for ${user.name}.`);
  };

  return (
    <section className="page-card">
      <p className="eyebrow">Users</p>
      <h1>Fans and players</h1>
      <p className="lede">Select an account here, then place the current cart order under that user.</p>
      {message ? <p className="success-text">{message}</p> : null}
      <p className="tag" style={{ marginTop: '12px' }}>
        Current account: {selectedUser ? selectedUser.name : 'No account selected'}
      </p>
      <div className="info-grid">
        {sampleUsers.map((user) => (
          <article className="mini-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p className="tag">{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.city}</p>
            <p style={{ marginTop: '8px' }}>
              <button className="btn btn-primary" type="button" onClick={() => chooseUser(user)}>Select account</button>
              <button className="btn" type="button" onClick={() => placeOrderForUser(user)} style={{ marginLeft: '8px' }}>Place order</button>
            </p>
          </article>
        ))}
      </div>
      <article className="mini-card" style={{ marginTop: '16px' }}>
        <h2>Recent orders</h2>
        {orders.length ? orders.map((order) => (
          <p key={order.id} className="tag">{order.user} — {order.items.length} item(s), ${order.total.toFixed(2)} on {order.createdAt}</p>
        )) : <p>No orders placed yet.</p>}
      </article>
    </section>
  );
}

export default Users;
