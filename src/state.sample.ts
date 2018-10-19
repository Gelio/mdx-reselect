import { State } from './types';

const state: State = {
  user: {
    name: 'Grzenio',
    age: 42,
  },
  cart: {
    updatedAt: new Date(2018, 9, 19, 10, 39),
    items: [
      {
        name: 'Cup',
        quantity: 5,
        price: 1,
      },
      // more items
    ],
  },
};
