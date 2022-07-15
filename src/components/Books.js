/* eslint-disable */
import Book from './Book';
import './css/Books.css';
import BookForm from './BookForm';

const Books = (props) => {
  const { books } = props;

  return (
    <div>
      <ul className='books'>
        {props.books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
}
export default Books;
