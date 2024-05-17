import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddBookForm, { FormValues } from '../components/BookForm';
import officeImage from '../assets/office2.jpg'
import { useAddBook } from '../hooks/useAddBook';
import Hero from '../components/Hero';

const AddBookPage: React.FC = () => {
  const navigate = useNavigate();
  const [triggerAddBook, {isLoading}] = useAddBook();

  const onSubmit = async (values: FormValues) => {
    await triggerAddBook(values);
    navigate(-1);
  }

  return (
    <Hero url={officeImage}>
      <Container>
        <Typography sx={{fontSize: {xs:'1.5rem', sm: '1.5rem', md: '2.125rem' }}} align='center' variant="h4" component="h3" gutterBottom>
          Add New Book {isLoading ? 'Updating...' : ''}
        </Typography>
        <Box my={4} >
          <AddBookForm
            formTitle={`Add New Book`}
            formSubmitButtonTitle="Add Book"
            onSubmit={onSubmit}
          />
        </Box>
      </Container>
    </Hero>
  );
};

export default AddBookPage;
