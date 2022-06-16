import React from 'react';
import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';
import cover from '../assets/cover.png';
import defaultPic from '../assets/default.png';
import profile from '../assets/profile.png';

const Login = () => {


    
    return (
        <>

        <div className='login-div1'>
            <div className='login-div2'>
            <img src={defaultPic}></img>

            {/* <Button variant="white" color="gray">
                Login    
            </Button> */}

            </div>

            <Button
                component="a"
                rel="noopener noreferrer"
                href="/api/auth"
                leftIcon={<IconBrandGithub size={25} />}
                styles={(theme) => ({
                root: {
                    backgroundColor: '#8B949E',
                    border: 0,
                    height: 62,
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
                Login via GitHub
            </Button>
        </div>
        </>
    )
}

export default Login;



