import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';
import * as Crypto from 'crypto-js';

const key = process.env.REACT_APP_CLIENT_SECRET;

// handle fetch posts from mongoDB
export const getPosts = () => async (dispatch) => {
  try {
    
    // get posts from DB
    const { data } = await api.fetchPosts();

    const decryptedData = data.map(item => {
      // Decrypt title
      const decryptedTitle = Crypto.AES.decrypt(item.title, key).toString(Crypto.enc.Utf8);
      // Decrypt message
      const decryptedMessage = Crypto.AES.decrypt(item.message, key).toString(Crypto.enc.Utf8);

      const decryptedTags = Crypto.AES.decrypt(item.tags[0], key).toString(Crypto.enc.Utf8);

      // Return decrypted item
      return {
        ...item,
        title: decryptedTitle,
        message: decryptedMessage,
        tags: decryptedTags
      };
    });
    

    // update posts page
    dispatch({ 
      type: FETCH_ALL, 
      payload: decryptedData//data 
    });

  } catch (error) {
    console.log(error);
  }
};

// handle adding a new post (post)
export const createPost = (post) => async (dispatch) => {
  try {
    // send post data with post request
    const { data } = await api.createPost(post);

    let newPost = data;
    
    newPost.title = Crypto.AES.decrypt(data.title, key).toString(Crypto.enc.Utf8);
    newPost.message = Crypto.AES.decrypt(data.message, key).toString(Crypto.enc.Utf8);
    newPost.tags = Crypto.AES.decrypt(data.tags[0], key).toString(Crypto.enc.Utf8);


    // update the posts page
    dispatch({ 
      type: CREATE,
      payload: newPost 
    });

  } catch (error) {
    console.log(error);
  }
};

// handle post updates (patch)
export const updatePost = (id, post) => async (dispatch) => {
  try {
    // get updated post data with .patch() return
    const { data } = await api.updatePost(id, post);

    // update posts
    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

// handle post liking (working on adding one like per user)
export const likePost = (id) => async (dispatch) => {

  //const user = JSON.parse(localStorage.getItem('profile'));

  try {
    // patch request with post id and +1 to likes
    const { data } = await api.likePost(id);
    //console.log('api -> liked Post');

    // update posts
    dispatch({ type: LIKE, payload: data });

  } catch (error) {
    //console.log('nolike')
    console.log(error);
  }
};

/*

ignore

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    console.log('printing like data')
    console.log(data);
    dispatch({ type: LIKE, payload: data });
    console.log('api -> liked Post');
  } catch (error) {
    console.log(error);
  }
};

*/

// handle post deleting
export const deletePost = (id) => async (dispatch) => {
  try {
    // send .delete() request to DB
    await api.deletePost(id);

    // update posts
    dispatch({ type: DELETE, payload: id });
    
  } catch (error) {
    console.log(error);
  }
};
