import React, { useCallback } from 'react';
import { Container, Typography, Box, Button, CircularProgress, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import AddIcon from '@mui/icons-material/Add';
import { useBooks } from '../hooks/useBooks';
import { useDeleteBook } from '../hooks/useDeleteBook';
import BookCard from '../components/BookCard';
import Hero from '../components/Hero';

const BookListPage: React.FC = () => {
  const navigate = useNavigate();
  const { books, isLoading, isError } = useBooks();
  const { deleteExistingBook } = useDeleteBook();

  const onEdit = useCallback((bookId: number) => {
    navigate(`/edit/${bookId}`);
  }, [])

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error loading books</div>;


  return (
    <>
      <Hero url={heroImage} >
        <Box textAlign="center" width={{xs: '95%' , sm: '70%', md: "50%"}}>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Typography fontSize={{ xs: '2rem', sm: '3rem', md: '3.75rem' }} mb={1} variant="h2" color="primary" align="center" >
              Expand your mind,<br />reading a book
            </Typography>
            <Typography variant="subtitle1" color={{xs: 'text.secondary',  md: 'secondary' }} align="center">
              Reading books is a wonderful way to spend your time.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" margin={5}>
            <Button variant="outlined" onClick={() => navigate('/add')} startIcon={<AddIcon />}>
              Add New Book
            </Button>
          </Box>
        </Box>
      </Hero>
      {
        books?.length > 0 && (
          <Box my={4} mx={4} py={4}>

            <Typography align="center" variant="h4" component="h1" gutterBottom mb={4}>
                List of books
            </Typography>
            <Container maxWidth='xl'>
              <Grid container spacing={3}>
                {books?.map((book) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                    <BookCard
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      description={book.description}
                      onEdit={onEdit}
                      onDelete={deleteExistingBook}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        )
      }
    </>
  );
};

export default BookListPage;
