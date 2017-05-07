import { mobx, observable } from 'mobx';
// helper
import { json } from '../helper/json';
import { seeds } from '../../../seeds'

class Customers {

  @observable all = () => {
    const DEFINE_COLUMN_KEYS = ['id', 'name', 'phone', 'address'];

    const titles = {id: '#', name: 'Name', phone: 'Phone', address: 'Address' }

    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    const dataFilter = seeds.customers.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    return [ titlesFilter, dataFilter ]
  }
}
const customers = new Customers();
export default customers;
