/* eslint-disable */
import Book from './Book';
import './css/Books.css';

const Books = (props) => {
  const { books } = props;

  return (
    <ul className='books'>
      {props.books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
export default Books;
