/* eslint-disable */

function hull_types(hull_types = {}, action) {
    switch (action.type) {
      case 'hull_types/get':
        return { value: hull_types }
      case 'hull_types/set':
        return { value: hull_types}
      default:
        return hull_types
    }
  }