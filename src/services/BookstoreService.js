import http from './BookstoreAPI';

const createApp = () => http.post('/apps');

const postNewBook = (data) => {
  const { title, author, appId } = data;
  const book = {
    item_id: '1',
    title,
    author,
    category: 'fiction',
  };
  console.log(title);
  return http.post(`/apps/${appId}/books`, book);
};

const BookService = {
  createApp,
  postNewBook,
};
export default BookService;
