import React from 'react';
import { useState, Fragment } from 'react';
import { Card, CardActions, Button, Typography, TextField, InputAdornment, Tooltip } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Visibility, VisibilityOff, Assignment }  from '@material-ui/icons';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const inputColor = '#B6E6FA';//'#F2733F';
const darkGrey = 'rgba(0, 0, 0, 0.54)';
const lightGrey = 'rgba(255, 255, 255, 0.76)';


const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // user data
    const user = JSON.parse(localStorage.getItem('profile'));

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const [isOptionsHovered, setIsOptionsHovered] = useState(false);
    
    const [openUser, setOpenUser] = useState(false);
    const [openPass, setOpenPass] = useState(false);

    const handleTooltipClosePass = () => {
      setOpenPass(false);
    };

    const handleTooltipOpenPass = () => {
      handleCopyClipboard(post.tags)
      setOpenPass(true);
    
      // Set open to false after a delay (e.g., 2000 milliseconds = 2 seconds)
        setTimeout(() => {
          setOpenPass(false);
      }, 1500); // Adjust the delay time as needed
    };

    const handleTooltipCloseUser = () => {
      setOpenUser(false);
    };

    const handleTooltipOpenUser = () => {
      handleCopyClipboard(post.message)
      setOpenUser(true);
    
      // Set open to false after a delay (e.g., 2000 milliseconds = 2 seconds)
        setTimeout(() => {
          setOpenUser(false);
      }, 1500); // Adjust the delay time as needed
    };

    const handleMouseEnter = () => {
      setIsOptionsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsOptionsHovered(false);
    };

    const optionsStyle = {
      background: isOptionsHovered ? darkGrey: 'none',
      color: 'grey',
    };

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

    const handleCopyClipboard = (value) => {
      //alert(value);
      
      // Creating a temporary textarea element to copy the value
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    return (

      <Card className={classes.card} >
        
        {(user?.result?.name === post?.name) && (
          <div className={classes.overlay2}>

            <Button style={optionsStyle} size="small" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setCurrentId(post._id)}>
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
            fullWidth 
            value={post.message}
            className={classes.input}
            size="small"
            InputProps={{
              disableUnderline: true,
              style: {
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              },
              endAdornment: (
                <InputAdornment position="end" >
                  
                  
                  <Tooltip
                    PopperProps={{
                      //disablePortal: true,
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [-50, 50],
                          },
                        },
                      ],
                    }}
                    onClose={handleTooltipCloseUser}
                    open={openUser}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    //title="Copied to Clipboard!"
                    enterDelay={200} leaveDelay={1000}
                    arrow
                    title={<h1 style={{ fontSize: 12, fontWeight: 100, margin: 3, borderRadius: 20 }}>Copied to Clipboard!</h1>}
                  >
                  <Button 
                    onClick={handleTooltipOpenUser}
                    style={{marginTop: 15, marginRight: -20, background: 'transparent'}}
                    disableRipple
                  >
                    <ContentCopyIcon 
                      style={{
                        color: lightGrey, 
                      }}
                    />
                  </Button>
                  </Tooltip>
                  
                  
                  {/*
                  <Button onClick={handleShowPassword} style={{marginTop: 15, marginRight: -20, background: 'transparent'}}
                    disableRipple>
                    {showPassword === false ? <Visibility /> : <VisibilityOff />}
                  </Button>
                  */}
                  
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                color: inputColor
              }
            }}
            disabled={true}
          />

          <TextField 
            name="title" 
            variant="filled" 
            label="Password"
            fullWidth 
            value={post.tags}
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
                <InputAdornment position="end" >
                  
                  
                  <Tooltip
                    PopperProps={{
                      //disablePortal: true,
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [-50, 50],
                          },
                        },
                      ],
                    }}
                    onClose={handleTooltipClosePass}
                    open={openPass}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    //title="Copied to Clipboard!"
                    enterDelay={200} leaveDelay={1000}
                    arrow
                    title={<h1 style={{ fontSize: 12, fontWeight: 100, margin: 3, borderRadius: 20 }}>Copied to Clipboard!</h1>}
                  >
                  <Button 
                    onClick={handleTooltipOpenPass}
                    style={{marginTop: 15, marginRight: -20, background: 'transparent'}}
                    disableRipple
                  >
                    <ContentCopyIcon style={{color: lightGrey}}/>
                  </Button>
                  </Tooltip>
                  
                  
                  {/*
                  <Button onClick={handleShowPassword} style={{marginTop: 15, marginRight: -20, background: 'transparent'}}
                    disableRipple>
                    {showPassword === false ? <Visibility /> : <VisibilityOff />}
                  </Button>
                  */}
                  
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                color: inputColor
              }
            }}
            disabled={true}
          />
          </div>


        <CardActions className={classes.cardActions}>

            <Button className={classes.action} size="small" color="primary" onClick={() => setCurrentId(post._id)}>
              <EditIcon className={classes.icon} fontSize="small" /> edit
            </Button>

            <Button className={classes.action} size="small" color="primary" onClick={() => handleRemove()}>
              <DeleteIcon className={classes.icon} fontSize="small" /> delete
            </Button>
 
        </CardActions>




      </Card>

    )
};

export default Post;
