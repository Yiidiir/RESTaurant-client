import {ITable} from '../../../owner/manage-restaurant/table.model';

export interface IRestaurant {
  'id': number;
  'name': string;
  'address': string;
  'class': number;
  'updated_at': string;
  'tables': ITable[];
}
