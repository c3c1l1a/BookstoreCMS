import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
