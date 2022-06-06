import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getAction } from '../../../store/epics';

function CartContentItem(props) {
  const {
    item, selectedSize, selectedQuantity, lineIndex,
  } = props;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(getAction('cart/removeItemFromCart', { id: item.id }));
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/scope */}
      <td scope="row">{lineIndex + 1}</td>
      <td><a href={`/products/${item.id}`}>{item.title}</a></td>
      <td>{selectedSize}</td>
      <td>{selectedQuantity}</td>
      <td>{`${item.price} руб.`}</td>
      <td>{`${item.price} x ${selectedQuantity} руб.`}</td>
      <td>
        <button
          type="button"
          onClick={removeItemHandler}
          className="btn btn-outline-danger btn-sm"
        >
          Удалить
        </button>
      </td>
    </>
  );
}

CartContentItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  selectedQuantity: PropTypes.number.isRequired,
  selectedSize: PropTypes.string.isRequired,
  lineIndex: PropTypes.number.isRequired,
};

export default CartContentItem;