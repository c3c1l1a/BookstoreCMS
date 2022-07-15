/* eslint-disable */
import './css/Book.css';

const Book = (props) => {
  const { book } = props;

  console.log(book);
  return (
    <li className='book'>
      <div className='details'>
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div className='action-buttons'>
        <button>Comments</button>
        <button>Remove</button>
        <button>Edit</button>
      </div>
      <div className='completion'>
        <p>{book.percentageCompleted}% Completed</p>
      </div>
      <div className='current-chapter'>
        <h4>Current Chapter</h4>
        <p>{book.currentChapter}</p>
      </div>
      <button className='update-progress'>Update progress</button>
    </li>
  );
};

export default Book;
