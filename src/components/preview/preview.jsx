import React from 'react';
import SalesHits from '../sales-hits/sales-hits';
import Catalog from '../catalog/catalog';

function Preview() {
  return (
    <>
      <SalesHits />
      <Catalog withSearch={false} />
    </>
  );
}

export default Preview;
