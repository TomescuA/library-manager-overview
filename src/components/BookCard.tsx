import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import book from '../assets/book.jpeg';
import { CardBook } from '../types/book';
import ConfirmationDelete from './ConfirmationDelete';


export default function BookCard ({ id, title, author, genre, description, onEdit, onDelete }: CardBook) {
  const [confirmationDelete, setConfirmationDelete] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, height: 500, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ height: 300, width: '100%' }}
          image={book}
          title="Book image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography color="primary" gutterBottom variant="h6" component="div" mb={0}>
            <Box sx={{ textTransform: 'capitalize' }}> {title}</Box>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Typography component="div" variant='subtitle2' color="secondary">
              <Box sx={{ textTransform: 'capitalize' }}> {author}</Box>
            </Typography>
            <Typography component="div" variant='subtitle2' color="secondary">
              <Box sx={{ textTransform: 'capitalize' }}> {genre} </Box>
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onEdit(id)}>Edit</Button>
          <Button size="small" onClick={() => setConfirmationDelete(true)}>Delete</Button>
        </CardActions>
      </Card>
      <ConfirmationDelete
        open={confirmationDelete}
        handleClose={() => setConfirmationDelete(false)}
        handleDelete={() => onDelete(id)}
      />
    </>
  );
}
