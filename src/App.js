/* eslint-disable */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookstoreService from './services/BookstoreService';
import { getAllBooks } from './redux/books/books';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './components/css/App.css';
import './components/css/reset.css';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [appId, setAppId] = useState();
  useEffect(() => async () => {
    setAppId('iRtVG1ZXVKkAdoYaZMbO');
    await dispatch(getAllBooks('iRtVG1ZXVKkAdoYaZMbO'));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books appId={appId} books={state.books} />} />
        <Route path="categories/*" element={<Categories categories={state.categories} />} />
      </Routes>
    </div>
  );
};

export default App;
