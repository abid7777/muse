export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Order ID',
      type: 'string',
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: { type: 'customer' },
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [ { type: 'reference', to: { type: 'product' } } ],
    },
    {
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'datetime',
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Placed', value: 'placed' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
    },
  ],
}
