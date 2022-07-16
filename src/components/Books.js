import PropTypes from 'prop-types';
import Book from './Book';
import './css/Books.css';
import BookForm from './BookForm';

const Books = (props) => {
  const { books } = props;

  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.object],
  )),
};

export default Books;
