import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Input, InputBase, FormControl, InputAdornment, FilledInput, InputLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Add, Remove, Close }  from '@material-ui/icons';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

// this form handles post creation and updates

// primary: #F2733F (orange)
// secondary: #3FBEF2 (azure)
// tertiary: #B6E6FA (light blue)
const inputColor = '#F2733F';
const buttonColor = '#B6E6FA';

const Form = ({ currentId, setCurrentId }) => {

  // state for post data
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  
  // whether user has selected a post
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  
  const classes = useStyles();
  
  // keep user id
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();


  const [pdf, setPDF] = useState();

  const [filename, setFilename] = useState('');


  const makePost = async () => {


    if (postData.message == ''){
      postData.message = 'Sorry! There was an error parsing text.'
    }

    
    if (currentId === 0) { // create
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else { // update
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }

  }



  
  // makes call to textminer NLP API
  const makeAPICall = async (text) => {

      makePost(text);
  }

  

    


  
  
  // if user selects a new post, show it in form
  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  // clear form data
  const clear = () => {
    setCurrentId(0); // might change back to null
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    setFilename('');
  }




 
  // send form data to actions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // call API here
    //await makeAPICall()

    console.log(postData);
  };


  // form if user is not logged in
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to Create Soundbytes.
        </Typography>
      </Paper>
    );
  }


  return (
    <Paper className={classes.paper}>


      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      {/*
      <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Soundbyte</Typography>
      */}
      
      <div className={classes.inputContainer}>
  

      <TextField 
        name="title" 
        variant="filled" 
        label="Website URL" 
        //color="info"
        fullWidth 
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        className={classes.input}
        size="small"
        //type="url"
        InputProps={{
          disableUnderline: true,
          style: {
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
          },
        }}
        InputLabelProps={{
          style: {
            color: inputColor//'#F2733F'//'#F2613F'
          }
        }}
        focused
      />

      <TextField 
          name="message" 
          variant="filled" 
          label="Username" 
          fullWidth 
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          className={classes.input}
          size="small"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: {
              color: inputColor//'#F2733F'//'#F2613F'
            }
          }}
          focused
      />

      <TextField 
          color="inherit"
          name="tags" 
          variant="filled" 
          label="Password" 
          fullWidth 
          type="password"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          className={classes.input}
          size="small"
          InputProps={{
            disableUnderline: true,
            style: {
              borderBottomLeftRadius: "7px",
              borderBottomRightRadius: "7px",
              // #40375c
            },
          }}
          InputLabelProps={{
            style: {
              color: inputColor//'#F2733F'//'#F2613F'
            }
          }}
          focused
      />

      </div>


  <Button
    className={classes.buttonSubmit}
    variant="contained"
    size="large"
    type="submit"
    fullWidth
    style={{
      textTransform: 'none',
      borderRadius: 5,
      color: buttonColor,//'#63A6FF',
      justifyContent: 'flex-start', // Changed to flex-start
      marginTop: 10,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', marginLeft: -10 }}>
      <Add style={{ fontSize: 18, marginRight: 4 }} />

      <div>
        {currentId ? 'edit website' : 'add website'}
      </div>
    </div>
  </Button>

  <Button
    className={classes.buttonSubmit}
    variant="contained"
    size="large"
    onClick={clear}
    fullWidth
    style={{
      textTransform: 'none',
      borderRadius: 5,
      color: buttonColor,//'#63A6FF',
      marginTop: 0,
      justifyContent: 'flex-start', // Changed to flex-end
      minWidth: '100px',
      textAlign: 'left',
      marginBottom: 5
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap',  marginLeft: -10  }}>
      <Close style={{ fontSize: 18, marginRight: 4 }} />

      <div>
        clear
      </div>
    </div>
  </Button>


        

      </form>
    </Paper>
  )
};

export default Form;
