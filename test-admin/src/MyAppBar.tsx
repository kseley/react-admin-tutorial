import { AppBar, TitlePortal } from 'react-admin';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const MyAppBar = () => (

    <AppBar 
        color={'primary'} 
        position='static' 
    >
        <TitlePortal >
            <Box flex={1} display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                    <Box
                        component="img"
                        sx={{ marginRight: '1em', height: 30 }}
                        src={
                            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                        }
                        alt="Bosch Logo"
                    />
                    <Typography component="span" variant="h5">
                        HTV Service Tracker
                    </Typography>
                </Box>
                <Box>
                    <Tabs
                        value={useLocation().pathname}
                        aria-label="Navigation Tabs"
                        indicatorColor="secondary"
                        textColor="inherit"
                    >
                        <Tab
                            label={'Dashboard'}
                            component={Link}
                            to="/"
                            value="/"
                        />
                    <Tab
                        label={'Sales'}
                        component={Link}
                        to="/companies"
                        value="/companies"
                    />
                        <Tab
                            label={'Service'}
                            component={Link}
                            to="/jobs"
                            value="/jobs"
                        />
                    </Tabs>
                </Box>
            </Box>
        </TitlePortal>
    </AppBar>
);