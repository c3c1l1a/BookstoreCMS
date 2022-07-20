import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

import './css/Book.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(removeBook(book.id));
  };

  return (
    <li className="book">
      <div className="details">
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div className="action-buttons">
        <button type="submit">Comments</button>
        <button type="submit" onClick={onClick}>Remove</button>
        <button type="submit">Edit</button>
      </div>
      <div className="completion">
        <p>
          {book.percentageCompleted}
          % Completed
        </p>
      </div>
      <div className="current-chapter">
        <h4>Current Chapter</h4>
        <p>{book.currentChapter}</p>
      </div>
      <button type="submit" className="update-progress">Update progress</button>
    </li>
  );
};

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array],
  )),
};

export default Book;
