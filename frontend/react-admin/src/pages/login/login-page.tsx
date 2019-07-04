import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import './index.scss';

export const LoginPage = () => (
  <div>
    <CssBaseline />
    <Box display="flex">
      <Box width={300} height="100vh" style={{ background: 'black' }} />
      <Box height="100vh">
        <CardMedia image="../assets/modulmaster-black.jpg" title="Atelier" />
      </Box>
    </Box>
  </div>
);
