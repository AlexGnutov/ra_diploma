import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../../store/epics';
import { loadNewItemsReq } from '../../../store/slices/catalog-slice';

function CatalogSearch() {
  const { searchWord } = useSelector((state) => state.catalogSearch);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const changeSearchWordHandler = (e) => {
    dispatch(getAction('catalog-search/setSearchWord', { searchWord: e.target.value }));
    if (e.target.value === '') {
      dispatch(loadNewItemsReq());
    }
  };

  const searchFromSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loadNewItemsReq());
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="catalog-search-form form-inline"
      onSubmit={searchFromSubmitHandler}
    >
      <input
        className="form-control"
        onChange={changeSearchWordHandler}
        placeholder="Поиск"
        value={searchWord}
        ref={inputRef}
      />
    </form>
  );
}

export default CatalogSearch;
