import { createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../services/BookstoreService';

const ADD = 'books/ADD/';
const REMOVE = 'books/REMOVE';
const FULFIL_ADD = 'books/ADD/fulfilled';
const FULFIL_REMOVE = 'books/REMOVE/fulfilled';
const GET_ALL = 'books/GET_ALL';
const FULFIL_GET_ALL = 'books/GET_ALL/fulfilled';

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
      if (action.payload) {
        const serverExistingItems = Object.entries(action.payload).map((item) => item[0]);
        const stateExstingItems = state.map((item) => item.id);
        const removedItem = stateExstingItems.filter((item) => !serverExistingItems.includes(item));
        return state.filter((book) => book.id !== removedItem[0]);
      }
      return state;
    }
    case GET_ALL: {
      return state;
    }
    case FULFIL_GET_ALL: {
      if (action.payload) {
        const allItems = Object.entries(action.payload).map((item) => {
          const newItem = {
            id: item[0],
            title: item[1][0].title,
            category: item[1][0].category,
            author: item[1][0].author,
            comments: [],
            percentageCompleted: 0,
            currentChapter: '',
          };
          return newItem;
        });
        return allItems;
      }
      return state;
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
    const appId = data[1];
    await BookService.removeBook(data);
    const response = await BookService.getAllBooks(appId);
    thunkAPI.dispatch({
      type: FULFIL_REMOVE,
      payload: response.data,
    });
  },
);

export const getAllBooks = createAsyncThunk(
  GET_ALL,
  async (appId, thunkAPI) => {
    const response = await BookService.getAllBooks(appId);
    thunkAPI.dispatch({
      type: FULFIL_GET_ALL,
      payload: response.data,
    });
  },
);
