import { v4 as uuidv4 } from 'uuid';

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
      return [...books, {
        id: uuidv4(),
        title: action.book.title,
        category: '',
        author: action.book.author,
        comments: [],
        percentageCompleted: 0,
        currentChapter: '',

      }];
    case REMOVE:
      return books.filter((book) => action.bookId !== book.id);
    default:
      return books;
  }
}

export function addBook(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE,
    bookId,
  };
}
