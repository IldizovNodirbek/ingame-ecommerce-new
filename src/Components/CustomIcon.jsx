import React from 'react';
import { SvgIcon } from '@mui/material';

const CustomIcon = (props) => (
  <SvgIcon {...props}>
    <rect x="2" y="10" width="2" height="4" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="9" y="6" width="2" height="8" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="16" y="2" width="2" height="12" fill="none" stroke="currentColor" strokeWidth="4" />
  </SvgIcon>
);

export default CustomIcon;
