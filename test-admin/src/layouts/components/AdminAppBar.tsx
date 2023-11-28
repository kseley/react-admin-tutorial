import { memo } from 'react';
import { AppBar, InspectorButton } from 'react-admin';
import { Typography } from '@mui/material';

export default memo(props => (
    <AppBar {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title" />
        <InspectorButton />
    </AppBar>
))