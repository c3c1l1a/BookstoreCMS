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
      const allItems = Object.entries(action.payload).map((item)=> {
        const itemData = {
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
          category: item[1][0].category,
          comments: [],
          percentageCompleted: 0,
          currentChapter: '',
        } 
        return itemData;
      });

      return [...state, ...allItems];
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
