const dataset = {

  // Customers
  customers: [
    {id: 1, name: 'Udin', address: 'Jl.Pejaten Timur IX', phone: '021-72299880'},
    {id: 2, name: 'Bagus N', address: 'Jl.Kembangan Timur 5', phone: '021-67577889'},
  ],

  // Foodplaces
  foodplaces: [
    {id: 1, name: 'Food Homemade Tofu Medan', address: 'Keb. Baru, South Jakarta', latitude: '6.8787899', longitude: '106.887878'},
    {id: 2, name: 'Food Homemade Tofu Medan Cab Senen', address: 'Kwitang Raya, Central Jakarta', latitude: '6.879', longitude: '106.886678'},
  ],

  // Orders
  orders: [
    {id: 1, caption: 'test1', transaction: '2017-07-12', customer: 'A'},
    {id: 2, caption: 'test2', transaction: '2017-10-05', customer: 'B'},
    {id: 3, caption: 'test3', transaction: '2017-10-15', customer: 'C'},
  ],

  // Promos
  promos: [
    {id: 1, title: 'Title-1', content: 'Content-1'},
    {id: 2, title: 'Title-2', content: 'Content-2'},
    {id: 3, title: 'Title-3', content: 'Content-3'},
    {id: 4, title: 'Title-4', content: 'Content-4'},
  ],

};

export const seeds = dataset;


// create_table "consumers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "avatar_file_name"
//   t.string   "avatar_content_type"
//   t.integer  "avatar_file_size"
//   t.datetime "avatar_updated_at"
//   t.string   "email"
//   t.string   "address"
//   t.string   "age"
//   t.string   "location"
//   t.float    "location_lat",        limit: 24
//   t.float    "location_lng",        limit: 24
//   t.datetime "created_at",                     null: false
//   t.datetime "updated_at",                     null: false
//   t.integer  "notification_id"
//   t.index ["notification_id"], name: "index_consumers_on_notification_id", using: :btree
// end
//
// create_table "items", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "name"
//   t.integer  "stock"
//   t.decimal  "price",                precision: 5, scale: 2
//   t.string   "picture_file_name"
//   t.string   "picture_content_type"
//   t.integer  "picture_file_size"
//   t.datetime "picture_updated_at"
//   t.datetime "created_at",                                   null: false
//   t.datetime "updated_at",                                   null: false
//   t.integer  "menu_id"
//   t.index ["menu_id"], name: "index_items_on_menu_id", using: :btree
// end
//
// create_table "menus", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "name"
//   t.integer  "stock"
//   t.decimal  "price",                precision: 5, scale: 2
//   t.string   "picture_file_name"
//   t.string   "picture_content_type"
//   t.integer  "picture_file_size"
//   t.datetime "picture_updated_at"
//   t.datetime "created_at",                                   null: false
//   t.datetime "updated_at",                                   null: false
//   t.integer  "order_id"
//   t.index ["order_id"], name: "index_menus_on_order_id", using: :btree
// end
//
// create_table "merchants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "name"
//   t.string   "owner"
//   t.string   "address"
//   t.string   "phone"
//   t.string   "avatar_file_name"
//   t.string   "avatar_content_type"
//   t.integer  "avatar_file_size"
//   t.datetime "avatar_updated_at"
//   t.datetime "created_at",          null: false
//   t.datetime "updated_at",          null: false
//   t.integer  "menu_id"
//   t.integer  "notification_id"
//   t.index ["menu_id"], name: "index_merchants_on_menu_id", using: :btree
//   t.index ["notification_id"], name: "index_merchants_on_notification_id", using: :btree
// end
//
// create_table "notifications", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "content"
//   t.string   "status"
//   t.string   "footnote"
//   t.string   "picture_file_name"
//   t.string   "picture_content_type"
//   t.integer  "picture_file_size"
//   t.datetime "picture_updated_at"
//   t.datetime "created_at",           null: false
//   t.datetime "updated_at",           null: false
// end
//
// create_table "orders", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "code"
//   t.integer  "qty"
//   t.decimal  "discount",   precision: 5, scale: 2
//   t.decimal  "amount",     precision: 5, scale: 2
//   t.decimal  "price",      precision: 5, scale: 2
//   t.datetime "created_at",                         null: false
//   t.datetime "updated_at",                         null: false
// end
//
// create_table "places", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "name"
//   t.text     "address",    limit: 65535
//   t.float    "latitude",   limit: 24
//   t.float    "longitude",  limit: 24
//   t.datetime "created_at",               null: false
//   t.datetime "updated_at",               null: false
// end
//
// create_table "promos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "title"
//   t.text     "content",              limit: 65535
//   t.string   "picture_file_name"
//   t.string   "picture_content_type"
//   t.integer  "picture_file_size"
//   t.datetime "picture_updated_at"
//   t.string   "promo_type"
//   t.datetime "created_at",                         null: false
//   t.datetime "updated_at",                         null: false
//   t.integer  "menu_id"
//   t.index ["menu_id"], name: "index_promos_on_menu_id", using: :btree
// end
//
// create_table "transactions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
//   t.string   "code"
//   t.string   "consumer_name"
//   t.string   "merchant_name"
//   t.decimal  "total_amount",  precision: 10
//   t.decimal  "discount",      precision: 5,  scale: 2
//   t.string   "order_detail"
//   t.string   "payment_type"
//   t.datetime "created_at",                             null: false
//   t.datetime "updated_at",                             null: false
//   t.integer  "order_id"
//   t.index ["order_id"], name: "index_transactions_on_order_id", using: :btree
// end
