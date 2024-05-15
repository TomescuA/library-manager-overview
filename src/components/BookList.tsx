import React from 'react';
import { useBooks } from '../hooks/useBooks';
import { useDeleteBook } from '../hooks/useDeleteBook';
import { Container, List, ListItem, ListItemText, CircularProgress, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Book } from '../types/book';

const BookList: React.FC<{ onEdit: (book: Book) => void }> = ({ onEdit }) => {
  const { books, isLoading, isError } = useBooks();
  const { deleteExistingBook } = useDeleteBook();

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error loading books</div>;

  return (
    <Container>
      <List>
        {books?.map((book) => (
          <ListItem
            key={book.id}
            secondaryAction={
              <Box>
                <IconButton edge="end" aria-label="edit" onClick={() => onEdit(book)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteExistingBook(book.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText primary={book.title} secondary={`${book.author} - ${book.genre}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BookList;
