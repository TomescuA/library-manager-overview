import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import AddBookPage from './pages/AddBookPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/add' element={<AddBookPage/>} />
        <Route path='/edit/:id' element={<AddBookPage/>} />
        <Route path='/' element={<BookListPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
