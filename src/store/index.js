import {configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import genresReducer from './slices/genres'
import moviesReducer from './slices/movies'
const store = configureStore({
    reducer:{
        genres: genresReducer,
        movies: moviesReducer
    }
})



function StoreProvide({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default StoreProvide