import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, useMediaQuery } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

import memories from '../../images/memories.png';
import bookmarks from '../../images/bookmark.png';
import audioPlay from '../../images/audioPlay.png';

import useStyles from './styles';


// navbar at the top of main posts page

const Navbar = () => {
    // user data
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();

    const classes = useStyles();

    const isSmallScreen = useMediaQuery('(min-width: 800px)');

    // login + go back to signin / signup
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history('/');
        setUser(null);
        console.log('logged out');
      };

    // handle token expiry
    useEffect(() => {
        const token = user?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          setUser(JSON.parse(localStorage.getItem('profile')));
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit" fullWidth>
            
            
            <div className={classes.brandContainer}>
                
                <Typography component={Link} to="/home" className={classes.heading} variant="h2" align="center">Password Buddy</Typography>
                {/*}
                <img className={classes.image} src={audioPlay} alt="icon" height="80" width="100"/>
                */}
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                <div className={classes.profile}>
                    {/*<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>*/}
                    {isSmallScreen &&
                    <Typography className={classes.userName} variant="h6">
                        {
                            user?.result.name
                        }

                    </Typography>
                    }
                    <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" className={classes.logout} color="primary">sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;