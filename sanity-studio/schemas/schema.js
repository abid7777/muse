import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import category from './category';
import customer from './customer';
import order from './order';
import product from './product';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    category,
    customer,
    order,
    product,
  ]),
});
