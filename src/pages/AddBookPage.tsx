import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AddBookForm from '../components/AddBookForm';
import { Book } from '../types/book';
import { getBooks } from '../api/bookApi';

const AddBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [editBook, setEditBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the book details for editing
      getBooks().then((books) => {
        const bookToEdit = books.find((book) => book.id === parseInt(id));
        if (bookToEdit) {
          setEditBook(bookToEdit);
        }
      });
    }
  }, [id]);

  const clearEdit = () => {
    setEditBook(null);
    navigate('/');
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h3" gutterBottom>
          {editBook ? 'Edit Book' : 'Add New Book'}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
          Back to Book List
        </Button>
        <AddBookForm editBook={editBook} clearEdit={clearEdit} />
      </Box>
    </Container>
  );
};

export default AddBookPage;
