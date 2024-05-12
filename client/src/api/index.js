import axios from 'axios';

// zeet url
// resuing backend from pdf sum project
const API = axios.create({ baseURL: process.env.DOCKER_URL });

// authorization to apply middleware
// send token to backend middleware
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

// posts-related requests

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost).then(fetchPosts());
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost).then(fetchPosts());
export const deletePost = (id) => API.delete(`/posts/${id}`).then(fetchPosts());


// auth-related requests
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);