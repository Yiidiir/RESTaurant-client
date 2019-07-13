export interface ITable {
  id: number;
  capacity_min: number;
  capacity_max: number;
  class: number;
  in_restaurant_number: number;
  available: boolean;
  restaurant_id: number;
}
