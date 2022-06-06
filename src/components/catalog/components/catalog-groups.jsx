import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCatGroupsReq } from '../../../store/slices/catalog-groups-slice';
import { getAction } from '../../../store/epics';

function CatalogGroups() {
  const { groups, loading, error } = useSelector((state) => state.categories);
  const { activeGroup } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCatGroupsReq());
  }, [dispatch]);

  const setCatalogueGroup = (groupId) => {
    if (groupId === activeGroup) {
      return;
    }
    dispatch(getAction('catalog/setCatGroup', { activeGroup: groupId }));
  };

  if (loading || error) {
    return null;
  }

  return (
    (groups.length > 0)
      ? (
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item" key="$">
            <a
              className={activeGroup === null ? 'nav-link active' : 'nav-link'}
              role="button"
              href="#0"
              onClick={(e) => {
                e.preventDefault();
                setCatalogueGroup(null);
              }}
            >
              Все
            </a>
          </li>

          {groups.map((group) => (
            <li className="nav-item" key={group.id}>
              <a
                className={activeGroup === group.id ? 'nav-link active' : 'nav-link'}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setCatalogueGroup(group.id);
                }}
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      ) : null

  );
}

export default CatalogGroups;
