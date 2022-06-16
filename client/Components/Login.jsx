import React from 'react';
import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';


const Login = () => {
    return (
        <div className='login-div1' style={{height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}}>
            <div className='login-div2' style={{}}>
                LOGIN:
            </div>

            <Button
                component="a"
                target="_blank"
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

    )
}

export default Login;



