import { CartContext } from "./Context";

export default function Cart() {
  return (
    <CartContext.Consumer>
      {(tempo) => {
        return tempo.cartList.map((value) => {
          return (
            <ul>
              <li>name : {value.name}</li>
              <li>price : {value.price}</li>
            </ul>
          );
        });
      }}
    </CartContext.Consumer>
  );
}
