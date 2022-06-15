import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CatalogSearch from './components/catalog-search';
import CatalogGroups from './components/catalog-groups';
import LoadingSpinner from '../messages/loading-spinner';
import CatalogItem from './catalog-item';
import { loadMoreItemsReq, loadNewItemsReq } from '../../store/slices/catalog-slice';

function Catalog(props) {
  const { withSearch } = props;
  const {
    items, loading, error, complete,
  } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewItemsReq());
  }, [dispatch]);

  const loadMore = () => {
    if (!complete) {
      dispatch(loadMoreItemsReq());
    }
  };

  if (loading) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <LoadingSpinner />
      </section>
    );
  }

  if (error) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <p className="text-center">
          Каталог товаров временно недоступен. Попробуйте
          <Link to="/" reloadDocument> перезагрузить страницу</Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {withSearch ? <CatalogSearch /> : null}
      <CatalogGroups />
      <div className="row">
        {items.map((data) => (
          <div className="col-4" key={v4()}>
            <CatalogItem images={data.images} title={data.title} price={data.price} id={data.id} />
          </div>
        ))}
      </div>
      {!complete
        ? (
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary" onClick={loadMore}>Загрузить ещё</button>
          </div>
        )
        : null}
    </section>
  );
}

Catalog.propTypes = {
  withSearch: PropTypes.bool.isRequired,
};

export default Catalog;
