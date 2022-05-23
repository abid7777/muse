export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Disabled', value: 'disabled' },
        ],
      },
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [ { type: 'reference', to: { type: 'order' } } ],
    },
  ],
}
