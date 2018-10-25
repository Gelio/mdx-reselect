export const CartInfo: StatelessComponent<CartInfoProps> = ({ cart }) => {
  // Measure the number of renders
  console.log('Rendering cart info');

  return (
    <ul>
      {cart.items.map((item) => (
        <li key={item.name}>
          {item.name} ({item.quantity} x ${item.price})
        </li>
      ))}
    </ul>
  );
};
