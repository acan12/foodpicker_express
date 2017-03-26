const dataset = {
  // Orders
  orders: [
    {id: 1, caption: 'test1', transaction: '2017-07-12', customer: 'A'},
    {id: 2, caption: 'test2', transaction: '2017-10-05', customer: 'B'},
    {id: 3, caption: 'test3', transaction: '2017-10-15', customer: 'C'},
  ],

  // Places
  places: [
    {id: 1, name: 'Place A'},
    {id: 2, name: 'Place B'},
  ],

  // Customers
  customers: [
    {id: 1, name: 'Udin', address: 'Jl.Pejaten Timur IX', phone: '021-72299880'},
    {id: 2, name: 'Bagus N', address: 'Jl.Kembangan Timur 5', phone: '021-67577889'},
  ]
};

export const seeds = dataset;
