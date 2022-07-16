import './css/BookForm.css';

const BookForm = () => (
  <form className="book-form">
    <input type="text" placeholder="Book Title..." name="title" />
    <input type="text" placeholder="Author..." name="author" />
    <button type="submit">ADD BOOK</button>
  </form>
);

export default BookForm;
