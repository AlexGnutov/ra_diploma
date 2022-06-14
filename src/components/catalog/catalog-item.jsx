import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CatalogItem(props) {
  const {
    images, title, price, id,
  } = props;

  return (
    <div className="card catalog-item-card">
      <img src={images[0]} className="card-img-top catalog-item-card-img" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">
          {price}
          {' '}
          руб.
        </p>
        <Link to={`/products/${id}`} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </div>
  );
}

CatalogItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CatalogItem;
