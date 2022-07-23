import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

import './css/Book.css';

const Book = (props) => {
  const { book, appId } = props;
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(removeBook([book, appId]));
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
        <svg
          className="percentageChart"
          style={{
            strokeDasharray: `${Math.floor(Math.random() * (150 - 100) + 100)} 999`,
          }}
          viewbox="0 0 100 100"
          width="80"
          height="80"
          data-percent="100"
        >
          <circle cx="40" cy="40" r="30" />
        </svg>
        <p className="percentageInfo">
          <span className="num">78%</span>
          <span className="det">Completed</span>
        </p>
      </div>
      <div className="current-chapter">
        <h4>Current Chapter</h4>
        <p>Not started</p>
      </div>
      <button type="submit" className="update-progress">Update progress</button>
    </li>
  );
};

Book.defaultProps = {
  book: {},
  appId: '',
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array],
  )),
  appId: PropTypes.string,
};

export default Book;
