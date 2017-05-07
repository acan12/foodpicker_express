import { mobx, observable } from 'mobx';
// helper
import { json } from '../helper/json';
import { seeds } from '../../../seeds'

class Orders {

  @observable all = () => {
    const DEFINE_COLUMN_KEYS = ['id', 'caption', 'transaction', 'customer'];

    const titles = {id: '#', caption: 'Caption', transaction: 'Trx Date', customer: 'Customer' }

    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    const dataFilter = seeds.orders.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    return [ titlesFilter, dataFilter ]
  }
}
const orders = new Orders();
export default orders;
