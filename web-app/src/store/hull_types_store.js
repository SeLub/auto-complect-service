import { configureStore } from '@reduxjs/toolkit'
import hull_types_reducer from '../reducers/hull_types_reducer'

export default configureStore({
  reducer: {
    hull_types: hull_types_reducer
  }
})