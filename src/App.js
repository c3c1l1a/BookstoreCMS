/* eslint-disable */
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookstoreService from './services/BookstoreService';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './components/css/App.css';
import './components/css/reset.css';

const App = () => {
  const state = useSelector((state) => state);
  const [appId, setAppId] = useState();
  

  useEffect(() => {
    return () => setAppId('s6n8xuf2HaDgoDDmffFQ');
    /*return () => BookstoreService.createApp()
      .then(res => {
        setAppId(res.data);
      });*/
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
