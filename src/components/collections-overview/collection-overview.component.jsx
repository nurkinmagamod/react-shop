import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CollectionPreview } from '../preview-collection/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview ({collection}) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionOverview) 