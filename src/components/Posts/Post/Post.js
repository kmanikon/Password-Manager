import React from 'react';
import { useState } from 'react';
import { Card, CardActions, Button, Typography, TextField, InputAdornment } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Visibility, VisibilityOff }  from '@material-ui/icons';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { ClassRounded } from '@material-ui/icons';

const inputColor = '#B6E6FA';//'#F2733F';

const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // user data
    const user = JSON.parse(localStorage.getItem('profile'));

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleRemove = () => {
      dispatch(deletePost(post._id));
    }

    const extractDomain = (url) => {
      try {
        let domain;
        if (url.startsWith("http://")) {
          domain = new URL(url).hostname;
        } else if (url.startsWith("https://")) {
          domain = new URL(url).hostname;
        } else {
          domain = url; // Assume it's just the domain name
        }
    
        const parts = domain.split('.');
        if (parts.length > 2) {
          return parts[1].charAt(0).toUpperCase() + parts[1].slice(1); // Capitalize the second-level domain
        } else {
          return parts[0].charAt(0).toUpperCase() + parts[0].slice(1); // Capitalize the domain if it doesn't have subdomains
        }
      } catch (error) {
        //console.error('Invalid URL:', error);
        return url;
      }
    }

    const formatURL = (url) => {
      
      // Check if the URL already starts with "https://" or "http://"
      if (!/^https?:\/\//i.test(url)) {
        // If not, prepend "https://"
        url = 'https://' + url;
      }
      
      // Check if the URL already ends with ".com"
      if (!/\.com$/i.test(url)) {
        // If not, append ".com"
        url += '.com';
      }
      
      return url;
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
        


        <Typography className={classes.title} variant="h5" gutterBottom >
          <a 
            href={formatURL(post.title)} 
            target="_blank" 
            className={classes.link} 
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            {extractDomain(post.title)}
          </a>
        </Typography>
        
        <div style={{marginTop: 0, marginBottom: 5}}>
          <TextField 
            name="title" 
            variant="filled" 
            label="Username" 
            //color="info"
            fullWidth 
            value={post.message}
            //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
            //focused
            disabled={true}
          />

          <TextField 
            name="title" 
            variant="filled" 
            label="Password" 
            //color="info"
            fullWidth 
            value={post.tags}
            //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            className={classes.input}
            size="small"
            type={showPassword ? "text" : "password"}
            InputProps={{
              disableUnderline: true,
              style: {
                borderBottomLeftRadius: "7px",
                borderBottomRightRadius: "7px",
                border: 'none'
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    style={{marginTop: 15, background: 'transparent'}}
                    disableRipple
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </Button>
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              style: {
                color: inputColor//'#F2733F'//'#F2613F'
              }
            }}
            //focused
            disabled={true}
          />
          </div>


        {/*
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h5" href={post.message} target="_blank" gutterBottom>{post.message}</Typography>
        </CardContent>

        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h5" href={post.tags} target="_blank" gutterBottom>{post.tags}</Typography>
        </CardContent>
        */}
        

        <CardActions className={classes.cardActions}>

            <Button className={classes.action} size="small" color="primary" onClick={() => setCurrentId(post._id)}>
              <EditIcon className={classes.icon} fontSize="small" /> Edit
            </Button>

            <Button className={classes.action} size="small" color="primary" onClick={() => handleRemove()}>
              <DeleteIcon className={classes.icon} fontSize="small" /> Delete
            </Button>
 
        </CardActions>




      </Card>

    )
};

export default Post;
