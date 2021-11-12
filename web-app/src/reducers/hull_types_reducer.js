/* eslint-disable camelcase */
export default function hullTypes(hull_types = {}, action) {
  switch (action.type) {
    case "hull_types/set":
      return {
        ...hull_types,
        name: action.name,
        shortName: action.shortName,
        engine: action.engine,
        fuel_type: action.fuel_type,
        transmission: action.transmission,
        interior: action.interior,
        engine_power: action.engine_power,
        base_price: action.base_price,
        base_price_currency: action.base_price_currency,
        mass: action.mass,
        pictures: action.pictures,
        base_options: action.base_options,
        additional_options: action.additional_options,
        reequipmentOptions: action.reequipmentOptions,
      };
    default:
      return hull_types;
  }
}
