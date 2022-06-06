import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../../store/epics';

function QuantitySelector() {
  const { selectedQuantity } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  const changeQuantity = (value) => {
    let newQty = selectedQuantity + value;
    if (newQty <= 0) newQty = 1;
    if (newQty > 10) newQty = 10;
    dispatch(getAction('productDetails/quantitySelect', { newQty }));
  };

  return (
    <p>
      Количество:
      <span className="btn-group btn-group-sm pl-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => changeQuantity(-1)}
        >
          -
        </button>
        <span className="btn btn-outline-primary">{selectedQuantity}</span>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => changeQuantity(1)}
        >
          +
        </button>
      </span>
    </p>
  );
}

export default QuantitySelector;
