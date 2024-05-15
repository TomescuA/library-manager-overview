import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';
import { Book } from '../types/book';
import heroImage from '../assets/hero.jpg'; 
import AddIcon from '@mui/icons-material/Add';

const BookListPage: React.FC = () => {
  const navigate = useNavigate();
  const [editBook, setEditBook] = useState<Book | null>(null);

  const handleEditBook = (book: Book) => {
    setEditBook(book);
    navigate(`/edit/${book.id}`);
  };

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '2rem',
          paddingRight: '2rem',
        }}
      >
      <Box sx={{
        width: "50%",

      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
        }}>
        <Typography variant="h2" color="primary" align="center">
            Expand your mind,<br />reading a book
          </Typography>

          <Typography variant="subtitle1" color="secondary" align="center">
            Reading books is a wonderful way to spend your time.
          </Typography>
        
        </Box>
        <Box margin={5} sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button variant="outlined" onClick={() => navigate('/add')} startIcon={<AddIcon />}>
            Add New Book
          </Button>
        </Box>
        </Box>
      </Box>
 

      {/* Book List */}
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Books
        </Typography>
      
        <BookList onEdit={handleEditBook} />
      </Box>
    </>
  );
};

export default BookListPage;
