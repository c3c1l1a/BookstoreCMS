import http from './BookstoreAPI';

const createApp = () => http.post('/apps');

const postNewBook = (data) => {
  const {
    title, author, bookId, appId,
  } = data;
  const book = {
    item_id: bookId,
    title,
    author,
    category: 'fiction',
  };
  return http.post(`/apps/${appId}/books`, book);
};

const removeBook = (data) => {
  const [book, appId] = data;
  return http.delete(`/apps/${appId}/books/${book.id}`);
};

const getAllBooks = (appId) => http.get(`/apps/${appId}/books`);

const BookService = {
  createApp,
  postNewBook,
  getAllBooks,
  removeBook,
};
export default BookService;
