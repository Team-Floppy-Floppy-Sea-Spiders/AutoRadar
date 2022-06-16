import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainContainer = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Link to="/">
              <Tab label="Home Page" />
            </Link>
            <Link to={'/wishlist'}>
              <Tab label="Wishlist" />
            </Link>
          </Tabs>
        </Box>
        <Link to='/login'>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            styles={(theme) => ({
              root: {
                backgroundColor: '#8B949E',
                position: 'absolute',
                top: '10px',
                right: '20px',
                border: 0,
                height: 42,
                paddingLeft: 15,
                paddingRight: 15,
                '&:hover': {
                  backgroundColor: theme.fn.darken('#8B949E', 0.15),
                },
              },
              leftIcon: {
                marginRight: 5,
              },
            })}
        >
          Logout
        </Button>
        </Link>
        

      </>
    );
}

export default MainContainer;