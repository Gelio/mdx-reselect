export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Cart {
  updatedAt: Date;
  items: CartItem[];
}

export interface User {
  name: string;
  age: number;
}

export interface State {
  user: User;
  cart: Cart;
}
