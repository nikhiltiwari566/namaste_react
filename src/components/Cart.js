import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center m-4 p-4 bg-blue-950 '>
      <h1 className='font-bold text-2xl text-amber-50'>Cart</h1>
      {cartItems.length ? (
        <button
          className='bg-black rounded-2xl p-2 m-2 text-amber-50 capitalize'
          onClick={emptyCart}
        >
          Empty Cart
        </button>
      ) : null}
      {!cartItems.length ? (
        <div className='bg-amber-100 p-8 m-4 '>
          <h2 className='p-2 m-2 text-3xl text-amber-950      '>
            Cart is empty, Add items to the cart.
          </h2>
        </div>
      ) : null}
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
