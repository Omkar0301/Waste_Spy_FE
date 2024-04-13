import React from 'react';

import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  position: 'fixed',
  top: 'calc(50% - 45px)',
  left: 'calc(50% - 45px)',
}));

function Loading() {
  return <StyledCircularProgress size={90} thickness={1} color="inherit" />;
}

export default Loading;
