import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './components/css/App.css';
import './components/css/reset.css';

const App = () => {
  const state = {
    books: [
      {
        id: uuidv4(),
        title: 'Hunger games',
        category: 'Action',
        author: 'Suzanne Collins',
        comments: [],
        percentageCompleted: 0,
        currentChapter: 'Chapter 17',
      },
      {
        id: uuidv4(),
        title: 'Dune',
        category: 'Science Fiction',
        author: 'Frank Herbert',
        comments: [],
        percentageCompleted: 0,
        currentChapter: 'Chapter 3: A Lesson Learned',
      },
      {
        id: uuidv4(),
        title: 'Capital in the 21st Centruary',
        category: 'Economy',
        author: 'Suzanne Collins',
        comments: [],
        percentageCompleted: 0,
        currentChapter: 'Introduction',
      },
    ],
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books books={state.books} />} />
        <Route path="categories/*" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
