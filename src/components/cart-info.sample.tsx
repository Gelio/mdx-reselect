import { StatelessComponent } from 'react';

import { Cart } from '../types';

interface CartInfoProps {
  cart: Cart;
}

export const CartInfo: StatelessComponent<CartInfoProps> = ({ cart }) => (
  <ul>
    {cart.items.map((item) => (
      <li key={item.name}>
        {item.name} ({item.quantity} x ${item.price})
      </li>
    ))}
  </ul>
);
