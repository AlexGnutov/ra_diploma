import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getAction } from '../../../store/epics';

export default function SizeSelector(props) {
  const { selectedSize } = useSelector((state) => state.productDetails);
  const { availableSizes } = props;
  const dispatch = useDispatch();

  const sizeClickHandler = (size) => {
    dispatch(getAction('productDetails/sizeSelect', { size }));
  };

  return (
    <p>
      {availableSizes[0]
        ? (
          <>
            Размеры в наличии:
            {availableSizes.map((data) => (
              <span
                className={data.size === selectedSize
                  ? 'catalog-item-size selected' : 'catalog-item-size'}
                onClick={() => sizeClickHandler(data.size)}
                onKeyDown={() => {}}
                key={v4()}
                role="button"
                tabIndex={0}
              >
                {data.size}
              </span>
            ))}
          </>
        ) : <>В настоящий момент нет в наличии</>}
    </p>
  );
}

SizeSelector.propTypes = {
  availableSizes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
