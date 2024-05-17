import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { BookFormProps } from '../types/book';

const validateSchema = Yup.object({
  title: Yup.string().required('Required book title'),
  author: Yup.string().required('Required book author'),
  genre: Yup.string().required('Required book genre'),
  description: Yup.string().required('Required book description'),
});



const AddBookForm: React.FC<BookFormProps> = ({ onSubmit, title, genre, author, description, formTitle, formSubmitButtonTitle }) => {
  const formik = useFormik({
    initialValues: {
      title: title || "",
      author: author || "",
      genre: genre || "",
      description: description || "",
    },
    validationSchema: validateSchema,
    onSubmit,
  });

  return (
    <Container maxWidth="sm">
      <Typography color="text.secondary"  variant="h6">{formTitle}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{marginBottom: 2}}
          size="small"
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
          sx={{marginBottom: 2}}
          size="small"
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
          sx={{marginBottom: 2}}
          size="small"
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
          sx={{marginBottom: 2}}
          size="small"
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
          {formSubmitButtonTitle}
        </Button>
      </form>
    </Container>
  );
};

export default AddBookForm;
