import {ITable} from '../../../owner/manage-restaurant/table.model';
import {IFood} from '../../../owner/manage-restaurant/food.model';

export interface IRestaurant {
  'id': number;
  'name': string;
  'address': string;
  'class': number;
  'updated_at': string;
  'tables': ITable[];
  'foods'?: IFood[];
}
