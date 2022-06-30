import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../../store/epics';
import { loadNewItemsReq } from '../../../store/slices/catalog-slice';

function CatalogSearch() {
  const { searchWord } = useSelector((state) => state.catalogSearch);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const changeSearchWord = (e) => {
    dispatch(getAction('catalog-search/setSearchWord', { searchWord: e.target.value }));
    if (e.target.value === '') {
      dispatch(loadNewItemsReq());
    }
  };

  const searchFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loadNewItemsReq());
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="catalog-search-form form-inline"
      onSubmit={searchFormSubmit}
    >
      <input
        className="form-control"
        onChange={changeSearchWord}
        placeholder="Поиск"
        value={searchWord}
        ref={inputRef}
      />
    </form>
  );
}

export default CatalogSearch;
