import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/add' element={<AddBookPage/>} />
        <Route path='/edit/:id' element={<EditBookPage/>} />
        <Route path='/' element={<BookListPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
