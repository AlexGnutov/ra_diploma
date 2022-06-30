import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './search-form';
import { hideSearchInput, showSearchInput } from '../../../store/slices/catalog-search-slice';

function HeaderControls() {
  const { goods } = useSelector((state) => state.cart);
  const { inputVisible, searchWord } = useSelector((state) => state.catalogSearch);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const openCart = () => {
    navigate('/cart.html');
  };

  const toggleSearch = () => {
    if (!inputVisible) {
      dispatch(showSearchInput());
      return;
    }
    if (inputVisible && !searchWord) {
      dispatch(hideSearchInput());
      return;
    }
    dispatch(hideSearchInput());
    navigate('/catalog.html');
  };

  return (
    <div>
      <div className="header-controls-pics">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={toggleSearch}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        />
        <div
          className="header-controls-pic header-controls-cart"
          onClick={openCart}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {goods.length > 0
            ? <div className="header-controls-cart-full">{goods.length}</div>
            : null}
          <div className="header-controls-cart-menu" />
        </div>
      </div>
      <SearchForm searchWord={searchWord} visible={inputVisible} />
    </div>
  );
}

export default HeaderControls;
