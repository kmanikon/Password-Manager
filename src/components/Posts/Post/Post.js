import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';



const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // user data
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleRemove = () => {
      dispatch(deletePost(post._id));
    }

    return (

      <Card className={classes.card} >
        {(user?.result?.name === post?.name) && (
          <div className={classes.overlay2}>

            <Button style={{ color: 'grey' }} size="small" onClick={() => setCurrentId(post._id)}>
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}


          <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
        



        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h5" href={post.message} target="_blank" gutterBottom>{post.message}</Typography>
        </CardContent>

        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h5" href={post.tags} target="_blank" gutterBottom>{post.tags}</Typography>
        </CardContent>
        

        <CardActions className={classes.cardActions}>

            <Button size="small" color="primary" onClick={() => handleRemove()}>
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          
        </CardActions>




      </Card>

    )
};

export default Post;
