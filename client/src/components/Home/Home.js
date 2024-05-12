import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import darkTheme from '../../theme';

// this is the main posts page

const Home = () => {

    const classes = useStyles(darkTheme);

    // userID
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();


    // get posts whenever there is a new user
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);


    const isSmallScreen = useMediaQuery('(min-width: 600px)');

    return (
        <Grow in>
            <Container className={classes.root}>
            {isSmallScreen ?
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    

                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    
                </Grid>
                :
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    

                    <Grid item xs={12} sm={5}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    
                    
                </Grid>
            }
            </Container>
        </Grow>
  )
}

export default Home