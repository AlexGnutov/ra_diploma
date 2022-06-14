import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../../store/epics';
import LoadingSpinner from '../../messages/loading-spinner';

function CartOrder() {
  const { phone, address, agreement, loading } = useSelector((state) => state.cartOrder);
  const { goods } = useSelector((state) => state.cart);
  const [isValid, setValid] = useState({
    formValid: false,
    phoneValid: false,
  });

  const dispatch = useDispatch();

  const updateValue = (e) => {
    const { name, value } = e.target;
    dispatch(getAction('cart-order/updateOrderData', { name, value }));
  };
  const setAgreement = (e) => {
    const { name, checked } = e.target;
    dispatch(getAction('cart-order/updateOrderData', { name, value: checked }));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    // Collect data from cart items
    const items = goods.map((g) => ({
      id: g.item.id,
      price: g.item.price,
      size: g.selectedSize,
      count: g.selectedQuantity,
    }));
    // Combine items data with customer information
    const orderData = {
      owner: {
        phone,
        address,
      },
      items,
    };
    dispatch(getAction('cart-order/sendOrderReq', { orderData }));
  };

  const validatePhone = (value) => (value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/));
  useEffect(() => {
    if (!validatePhone(phone)) {
      setValid((prev) => ({ ...prev, formValid: false, phoneValid: false }));
      return;
    }
    setValid((prev) => ({ ...prev, phoneValid: true }));
    if (address && agreement && goods[0]) {
      setValid((prev) => ({ ...prev, formValid: true }));
    } else {
      setValid((prev) => ({ ...prev, formValid: false }));
    }
  }, [isValid.phoneValid, address, agreement, phone, goods]);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: `${30}rem`, margin: '0 auto' }}>
        <form className="card-body" onSubmit={submitOrder}>
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
              onChange={updateValue}
            />
            {
              isValid.phoneValid ? null : <p>Введите номер в формате XXX-XXX-XX-XX</p>
            }
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
              onChange={updateValue}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agreement"
              onChange={setAgreement}
              checked={agreement}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами
              доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary" disabled={!isValid.formValid}>Оформить</button>
        </form>
      </div>
    </section>
  );
}

export default CartOrder;
