import {IFood} from '../../../owner/manage-restaurant/food.model';

export interface IOrder {
  'id'?: number;
  'restaurant_id': number;
  'restaurant_name'?: string;
  'client_id'?: number;
  'client_fullname'?: string;
  'order_time': string;
  'order_date': string;
  'order_status'?: string;
  'order_type'?: string;
  'menu_id': number;
  'foods'?: any;
  'price'?: number;
  'table_id'?: number;
  'client_cancellable'?: boolean;
}
