/* eslint-disable */

export default function hull_types(hull_types = {}, action) {
    switch (action.type) {
      case 'hull_types/set':
        return { 
          ...hull_types,
          name: action.name,
          engine: action.engine,
          fuel_type: action.fuel_type,
          transmission: action.transmission,
          interior: action.interior,
          engine_power: action.engine_power,
          base_price: action.base_price,
          base_price_currency: action.base_price_currency,
          pictures: action.pictures,
          base_options: action.base_options,
          additional_options: action.additional_options,
          pic1: action.pic1,
          pic2: action.pic2,
          pic3: action.pic3,
          pic4: action.pic4
        };
      // case 'hull_types/set':
      //   return { value: hull_types}
      // default:
      //   return hull_types
    }
    return hull_types;
  }




