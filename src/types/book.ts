export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
}

export interface CardBook extends Book {
  onEdit: (bookId: number) => void;
  onDelete: (id: number) => Promise<void>;
}

export interface ConfirmationDeleteTypes {
  open: boolean;
  handleClose: () => void;
  handleDelete: (id: number) => Promise<void>
}

export interface FormValues {
  title: string;
  author: string;
  genre: string;
  description: string;
}

export interface BookFormProps extends Partial<FormValues> {
  onSubmit: (values: FormValues) => void;
  formTitle: string;
  formSubmitButtonTitle: string;
}

export interface HeroType {
  url: string,
}
