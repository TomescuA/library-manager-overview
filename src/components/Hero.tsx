import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { HeroType } from '../types/book';

export default function Hero ({ url,children } : PropsWithChildren<HeroType>) {
  return (
    <Box height= '100vh' display="flex" alignItems="center" justifyContent="flex-end"
      sx={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {children}
    </Box>
  )
}