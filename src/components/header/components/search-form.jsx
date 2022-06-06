import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAction } from '../../../store/epics';
import { hideSearchInput } from '../../../store/slices/catalog-search-slice';

function SearchForm(props) {
  const { searchWord, visible } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeSearchWordHandler = (e) => {
    dispatch(getAction('catalog-search/setSearchWord', { searchWord: e.target.value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(hideSearchInput());
    navigate('/catalog.html');
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      data-id="search-form"
      className={visible
        ? 'header-controls-search-form form-inline'
        : 'header-controls-search-form form-inline invisible'}
    >
      <input
        type="text"
        className="form-control"
        onChange={changeSearchWordHandler}
        placeholder="Поиск"
        value={searchWord}
      />
    </form>
  );
}

SearchForm.propTypes = {
  searchWord: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default SearchForm;
