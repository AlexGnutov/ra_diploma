import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import CartContentItem from './cart-content-item';

function CartContent() {
  const { goods } = useSelector((state) => state.cart);

  const calcTotal = (items) => (
    items.reduce((acc, current) => (
      acc + current.item.price * current.selectedQuantity), 0)
  );

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((data, index) => (
            <tr key={v4()}>
              <CartContentItem
                item={data.item}
                selectedQuantity={data.selectedQuantity}
                selectedSize={data.selectedSize}
                lineIndex={index}
              />
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>
              { goods.length > 0 ? calcTotal(goods) : 0 }
              {' '}
              руб.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CartContent;
