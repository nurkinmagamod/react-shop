import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
