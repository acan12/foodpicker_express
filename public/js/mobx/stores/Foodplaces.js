import { mobx, observable } from 'mobx';
// helper
import { json } from '../helper/json';
import { seeds } from '../../../seeds'

class Foodplaces {

  @observable all = () => {
    const DEFINE_COLUMN_KEYS = ['id', 'name', 'address', 'latitude', 'longitude'];

    const titles = {id: '#', name: 'Name', address: 'Address', latitude: 'Latitude', longitude: 'Longitude' }

    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    const dataFilter = seeds.foodplaces.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    return [ titlesFilter, dataFilter ]
  }
}
const foodplaces = new Foodplaces();
export default foodplaces;
