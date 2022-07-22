/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import BookService from '../../services/BookstoreService';

const ADD = 'books/ADD/';
const REMOVE = 'books/REMOVE';

const FULFILLED = 'books/ADD/fulfilled';
const PENDING = 'books/ADD/pending';
const REJECTED = 'books/ADD/rejected'

const defaultState = [
  {
    id: uuidv4(),
    title: 'Hunger games',
    category: 'Action',
    author: 'Suzanne Collins',
    comments: [],
    percentageCompleted: 0,
    currentChapter: 'Chapter 17',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    category: 'Science Fiction',
    author: 'Frank Herbert',
    comments: [],
    percentageCompleted: 0,
    currentChapter: 'Chapter 3: A Lesson Learned',
  },
  {
    id: uuidv4(),
    title: 'Capital in the 21st Centruary',
    category: 'Economy',
    author: 'Suzanne Collins',
    comments: [],
    percentageCompleted: 0,
    currentChapter: 'Introduction',
  },
];

export default function booksReducer(state = defaultState, action) {
  
  switch (action.type) {
    case PENDING:
      return state;
    case ADD:
      return state;
    case REMOVE:
      return state.filter((book) => action.bookId !== book.id);
    case FULFILLED:
      let existingItems = state.map(item => item.id);
      const newItemData = Object.entries(action.payload).filter((item)=> !existingItems.includes(item[0]))[0];
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
    default:
      return state;
  }
}


export const addBook = createAsyncThunk(
  ADD,
  async (book,   thunkAPI) => {
      await BookService.postNewBook(book);
      const response = await BookService.getAllBooks(book.appId);
      thunkAPI.dispatch({
        type: FULFILLED,
        payload: response.data
      })

      return await response.data;
  },
);

export function removeBook(bookId) {
  return {
    type: REMOVE,
    bookId,
  };
}
