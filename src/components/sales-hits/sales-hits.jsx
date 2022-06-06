import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../messages/loading-spinner';
import { setStatus } from '../../store/actions/action-creators';
import { LOAD_SALES_HITS_REQ } from '../../store/actions/action-types';
import CatalogItem from '../catalog/catalog-item';
import {loadSalesHitsReq} from "../../store/slices/sales-hits-slice";

function SalesHits() {
  const { items, loading, error } = useSelector((state) => state.salesHits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSalesHitsReq());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          ERROR!!!
        </div>
      </section>
    );
  }

  return (
    (items.length > 0) ? (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {items.map((data) => (
            <div className="col-4" key={data.id}>
              <CatalogItem
                images={data.images}
                title={data.title}
                price={data.price}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </section>
    ) : null
  );
}

export default SalesHits;
