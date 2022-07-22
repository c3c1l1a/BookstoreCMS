import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './css/BookForm.css';

const BookForm = ({ appId }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (state.title.trim() && state.author.trim()) {
      await dispatch(addBook({
        title: state.title, author: state.author, bookId: uuidv4(), appId,
      }));
      setState({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form className="book-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Book Title..." name="title" value={state.title} onChange={onChange} />
      <input type="text" placeholder="Author..." name="author" value={state.author} onChange={onChange} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

BookForm.defaultProps = {
  appId: '',
};

BookForm.propTypes = {
  appId: PropTypes.string,
};

export default BookForm;
