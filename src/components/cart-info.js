import React from 'react';

export default ({ cart }) => (
  <ul>
    {cart.items.map((item) => (
      <li key={item.name}>
        {item.name} ({item.quantity} x ${item.price})
      </li>
    ))}
  </ul>
);
