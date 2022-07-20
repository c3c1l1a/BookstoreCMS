import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './components/css/App.css';
import './components/css/reset.css';

const App = () => {
  const state = useSelector((state) => state);

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
