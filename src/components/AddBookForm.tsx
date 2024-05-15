import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Book } from '../types/book';
import { useAddBook } from '../hooks/useAddBook';
import { useEditBook } from '../hooks/useEditBook';

const AddBookForm: React.FC<{ editBook?: Book; clearEdit: () => void }> = ({ editBook, clearEdit }) => {
  const { addNewBook } = useAddBook();
  const { editExistingBook } = useEditBook();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      genre: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      genre: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (editBook) {
        await editExistingBook(editBook.id, values);
        clearEdit();
      } else {
        await addNewBook(values);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (editBook) {
      formik.setValues({
        title: editBook.title,
        author: editBook.author,
        genre: editBook.genre,
        description: editBook.description,
      });
    }
  }, [editBook]);

  return (
    <Container>
      <Typography variant="h6">{editBook ? 'Edit Book' : 'Add New Book'}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="author"
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />
        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="Genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {editBook ? 'Update Book' : 'Add Book'}
        </Button>
      </form>
    </Container>
  );
};

export default AddBookForm;
