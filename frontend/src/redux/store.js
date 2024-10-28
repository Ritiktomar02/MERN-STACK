import { configureStore } from "@reduxjs/toolkit"
import appslice from './slices/appslice'


export const store=configureStore({
    reducer:{
      sliceapp:appslice
    }
})


