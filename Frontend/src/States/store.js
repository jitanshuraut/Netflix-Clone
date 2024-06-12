import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Toggle_Bar'

export default configureStore({
  reducer: {
    Toggel: counterReducer,
  },
})