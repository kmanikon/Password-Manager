import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, CircularProgress, Box, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

// used to clear login
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const inputColor = '#B6E6FA';//'#F2733F';

// sign up / sign in front end

const Auth = () => {

  // state for whether user has signed in
  const [isSignup, setIsSignup] = useState(false);

  // state for saving form data
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();

  // state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // toggle password visibility
  const handleShowPassword = () => setShowPassword(!showPassword);

  // true = bad login, false = user logged in / signed up
  const [badLogin, setbadLogin] = useState(false);
  const [badSignUp, setbadSignUp] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // on clicking form submit
  const handleSubmit = (e) => {
    e.preventDefault(); 
    //console.log('submit')
    //console.log(formData);

    setIsLoading(true);
    // call auth actions
    if (isSignup) {
      dispatch(signup(formData, history, setbadSignUp, setIsLoading));
    } else {
      dispatch(signin(formData, history, setbadLogin, setIsLoading));
    }
  }

  // switch between login and signup
  const switchMode = () => {
    setbadLogin(false);
    setbadSignUp(false);
    //setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  // update text for user input
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDemoSignIn = (e) => {
    const demoFormData = {
      firstName: '',
      lastName: '',
      email: 'example@gmail.com',
      password: '123',
      confirmPassword: ''
    }

    e.preventDefault(); 

    setIsLoading(true);

    dispatch(signin(demoFormData, history, setbadSignUp, setIsLoading));

    //setIsLoading(false);

  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>

        <Typography className={classes.formTitle} variant="h5">{ isSignup ? 'Sign Up' : 'Login' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/*
          { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
          )}
          */}
            
            {/*
            <Input
              name="email" 
              label="Email Address" 
              handleChange={handleChange}
              type="email" 
              className={classes.input} 
            />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            */}
            <TextField 
                name="email" 
                label="Email Address" 
                handleChange={handleChange}
                type="email" 
                className={classes.input} 
                //size="small"
                autoComplete='off'
                variant="outlined"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  border: '1px sold white',
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',//'#F2733F'//'#F2613F'
                    border: '1px sold white',
                    //background: 'black'
                  }
                }}
                
                //focused
                autoFocus
            />

        

            <TextField 
                name="password" 
                label="Password" 
                handleChange={handleChange} 
                type={showPassword ? 'text' : 'password'} 
                handleShowPassword={handleShowPassword} 

                className={classes.input} 
                //size="small"
                variant="outlined"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  border: '1px sold white'
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',//'#F2733F'//'#F2613F'
                    border: '1px sold white',
                    //background: 'black'
                  }
                }}
                //focused
            />
            
                

            
          {/*             
            <Input 
              name="confirmPassword"
              label="Repeat Password" 
              handleChange={handleChange} 
              type="password" 
            /> 
          */}
          { isSignup && 
            <TextField 
                name="confirmPassword"
                label="Repeat Password" 
                handleChange={handleChange} 
                type="password" 
                className={classes.input} 
                //size="small"
                autoComplete='off'
                variant="outlined"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  border: '1px sold white',
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',//'#F2733F'//'#F2613F'
                    border: '1px sold white',
                    //background: 'black'
                  }
                }}
            />
          }
        </Grid>
        
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          
          {isLoading ? 
            <>
              <CircularProgress size={25} style={{color: 'white'}}/>
            </>
          :
          <>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </>
          }
          
        </Button>

        
        <Grid container justify="center">
          <Grid item >


          { badLogin && !isSignup && (
              <Typography className={classes.auxText} variant="h6" style={{marginBottom: '10px', textAlign: 'center'}}>That user was not found</Typography>
            )}
            
            { badSignUp && isSignup && (
              <Typography className={classes.auxText} variant="h6" style={{marginBottom: '10px', textAlign: 'center'}}>A user exists with that email</Typography>
            )}


            <Box textAlign='center'>

              { isSignup ?
                <Button className={classes.auxText} onClick={switchMode} >
                  { 'Already have an account? Sign in'}
                </Button>
              :
                <Button className={classes.auxText} onClick={switchMode} >
                  { "Don't have an account? Sign Up" }
                </Button>
              }

            </Box>

            {/*
            <Button onClick={switchMode} >
              { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
            </Button>
            */}

            <Box textAlign='center'>
              <Button className={classes.auxText} onClick={handleDemoSignIn}>
                { !isSignup ? 'Sign In As a Demo User' : null}
              </Button>
            </Box>
            

            


           </Grid>
          </Grid>
        </form>

      </Paper>
    </Container>
  )
}

export default Auth