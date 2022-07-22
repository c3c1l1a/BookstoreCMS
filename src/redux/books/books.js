import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import BookService from '../../services/BookstoreService';

const ADD = 'books/ADD';
const REMOVE = 'books/REMOVE';
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

export default function booksReducer(books = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [...books, action.payload];
    case REMOVE:
      return books.filter((book) => action.bookId !== book.id);
    default:
      return books;
  }
}

export const addBook = createAsyncThunk(
  ADD,
  async (book, { rejectWithValue }) => {
    try {
      const response = await BookService.postNewBook(book);
      return response.data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export function removeBook(bookId) {
  return {
    type: REMOVE,
    bookId,
  };
}
