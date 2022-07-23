import PropTypes from 'prop-types';
import Book from './Book';
import './css/Books.css';
import BookForm from './BookForm';

const Books = (props) => {
  const { appId, books } = props;

  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            appId={appId}
          />
        ))}
      </ul>
      <BookForm appId={appId} />
    </div>
  );
};

Books.defaultProps = {
  books: [],
  appId: '',
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.object],
  )),
  appId: PropTypes.string,
};

export default Books;
