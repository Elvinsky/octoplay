import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import useAdminCheck from '../hooks/useAdminCheck';
import CustomBackdrop from './Backdrop';
import {NavLink} from 'react-router-dom';
export default function StickyFooter() {
    const [user] = useAdminCheck();
    if (!user) return <CustomBackdrop />;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    p: '1em',
                    mt: 'auto',
                    backgroundColor: '#00ff11bb',
                }}
            >
                <div className="flex flex-row m-auto items-center">
                    <div className="font-black text-2xl flex items-center gap-2 mr-auto">
                        OCTO PLAY
                        <img
                            src={process.env.PUBLIC_URL + '/images/octopus.png'}
                            alt="octo"
                            className="h-16"
                        ></img>
                    </div>
                    <Copyright />
                    <div className="ml-auto flex flex-row">
                        <NavLink
                            to="/userpage"
                            end="true"
                            className={({isActive}) =>
                                isActive
                                    ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                                    : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                            }
                        >
                            {user.name}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </NavLink>
                    </div>
                    {/* <Copyright /> */}
                </div>{' '}
            </Box>
        </Box>
    );
}
