import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../messages/loading-spinner';
import SizeSelector from './components/size-selector';
import QuantitySelector from './components/quantity-selector';
import { getAction } from '../../store/epics';

function ProductDetails() {
  const {
    data,
    data: {
      // id, category, heelSize, price, error
      title, images, sku, manufacturer, color, material, reason, season, sizes,
    },
    loading,
    error,
    selectedSize,
    selectedQuantity,
  } = useSelector((state) => state.productDetails);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const availableSizes = sizes.filter((size) => size.avalible);

  const addItemToCart = () => {
    dispatch(getAction('cart/addItemToCart', { item: data, selectedQuantity, selectedSize }));
    navigate('/cart.html');
  };

  useEffect(() => {
    dispatch(getAction('productDetails/loadProdDataReq', { id: productId }));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <section className="catalog-item">
        <LoadingSpinner />
      </section>
    );
  }

  if (error) {
    return (
      <section className="catalog-item">
        ERROR
      </section>
    );
  }

  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={images ? images[0] : ''} className="img-fluid" alt={title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <SizeSelector availableSizes={availableSizes} />
            {availableSizes.length > 0 ? <QuantitySelector /> : null }
          </div>
          {availableSizes.length > 0 ? (
            <button
              type="button"
              className="btn btn-danger btn-block btn-lg"
              disabled={!(selectedSize && selectedQuantity)}
              onClick={addItemToCart}
            >
              В корзину
            </button>
          ) : null }
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
