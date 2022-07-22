/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import BookService from '../../services/BookstoreService';

const ADD = 'books/ADD/';
const REMOVE = 'books/REMOVE';
const FULFIL_ADD = 'books/ADD/fulfilled';
const FULFIL_REMOVE = 'books/REMOVE/fulfilled'

const defaultState = [];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return state;
    case REMOVE:
      return state;
    case FULFIL_ADD: {
      const existingItems = state.map((item) => item.id);
      const newItemData = Object
        .entries(action.payload)
        .filter((item) => !existingItems.includes(item[0]))[0];
      const newItem = {
        id: newItemData[0],
        title: newItemData[1][0].title,
        category: newItemData[1][0].category,
        author: newItemData[1][0].author,
        comments: [],
        percentageCompleted: 0,
        currentChapter: '',
      };

      return [...state, newItem];
    }
    case FULFIL_REMOVE: {
      console.log(action.payload);
      const ServerExistingItems = Object.entries(action.payload).map((item) => item[0]);
      const stateExstingItems = state.map((item) => item.id);

      state.filter((book) => action.bookId !== book.id);
    }
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(
  ADD,
  async (book, thunkAPI) => {
    await BookService.postNewBook(book);
    const response = await BookService.getAllBooks(book.appId);
    thunkAPI.dispatch({
      type: FULFIL_ADD,
      payload: response.data,
    });

    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE,
  async (data, thunkAPI) => {
    const [book, appId] = data;
    await BookService.removeBook(data);
    const response = await BookService.getAllBooks(appId);
    thunkAPI.dispatch({
      type: FULFIL_REMOVE,
      payload: response.data
    })
  },
);
