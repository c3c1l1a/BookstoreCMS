import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './redux/books.js';

const rootReducer = combineReducers({
	books: booksReducer
});

const store = configureStore({
	reducer: rootReducer
});

export default store;

