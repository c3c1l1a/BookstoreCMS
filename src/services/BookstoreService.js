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
  console.log(book);
  return http.post(`/apps/${appId}/books`, book);
};

const BookService = {
  createApp,
  postNewBook,
};
export default BookService;
