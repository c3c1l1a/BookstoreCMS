/* eslint-disable*/
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (state.title.trim() && state.author.trim()) {
      dispatch(addBook({ title: state.title, author: state.author, appId }));
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

export default BookForm;
