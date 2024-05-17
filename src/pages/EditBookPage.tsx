import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import officeImage from '../assets/office2.jpg'
import { useBookById } from '../hooks/useBooks';
import { useUpdateBook } from '../hooks/useEditBook';
import { FormValues } from '../types/book';
import Hero from '../components/Hero';

const EditBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { book } = useBookById(parseInt(id as string));

  const [triggerUpdateBook, {isLoading}] = useUpdateBook();

  const onSubmit = async (values: FormValues) => {
    await triggerUpdateBook({id: parseInt(id as string), ...values});
    navigate(-1);
  }

  return (
    <Hero url={officeImage}>
      <Container>
        <Typography sx={{fontSize: {xs:'1.5rem', sm: '1.5rem', md: '2.125rem' }}} align='center' variant="h4" component="h3" gutterBottom>
            Edit Book {isLoading ? 'Updating...' : ''}
        </Typography>
        {book ? (
          <Box my={4} >
            <BookForm
              formTitle={`Edit book - ${book.title}`}
              formSubmitButtonTitle="Update"
              title={book.title}
              author={book.author}
              description={book.description}
              genre={book.genre}
              onSubmit={onSubmit}
            />
          </Box>
        ) : (<Typography>Books don't exist</Typography>)
        }
      </Container>
    </Hero>
  );
};

export default EditBookPage;
