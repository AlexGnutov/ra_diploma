import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../../store/epics';

function CartOrder() {
  const { phone, address } = useSelector((state) => state.cartOrder);
  const dispatch = useDispatch();

  const updateValueHandler = (e) => {
    const { name, value } = e.target;
    dispatch(getAction('cart-order/updateOrderData', {
      name,
      value,
    }));
  };
  const updateStatusHandler = (e) => {
    const { name, checked } = e.target;
    dispatch(getAction('cart-order/updateOrderData', {
      name,
      value: checked,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('send order');
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: `${30}rem`, margin: '0 auto' }}>
        <form className="card-body" onSubmit={formSubmitHandler}>
          <div className="form-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tel">Телефон</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="tel"
              value={phone}
              placeholder="Ваш телефон"
              onChange={updateValueHandler}
            />
          </div>
          <div className="form-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="address">Адрес доставки</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              placeholder="Адрес доставки"
              onChange={updateValueHandler}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agreement"
              onChange={updateStatusHandler}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами
              доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary" disabled>Оформить</button>
        </form>
      </div>
    </section>
  );
}

export default CartOrder;
