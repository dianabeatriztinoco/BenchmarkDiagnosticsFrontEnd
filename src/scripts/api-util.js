//you comment back in one of the imports below, if you prefer axios or jquery for AJAX requests

// import axios from 'axios';
// import $ from 'jquery';

// `getAllUsers` should
// (1) fetch all users from https://jsonplaceholder.typicode.com/users and
// (2) return the response as an array of user objects
// (hint: the api returns users as a stringified JSON array)
export const getAllUsers = () => {
  // Your code here
};

// `getUserPosts` should
// (1) take a userId as a parameter
export const getUserPosts = (userId) => {
  // (2) fetch all of that user's posts from `https://jsonplaceholder.typicode.com/posts?userId=${userId}` and
  // (3) return the response as an array of post objects
  // (hint: the api returns posts as a stringified JSON array)
  // Your code here
};

// `getPostComments` should
// (1) take a postId as a parameter
export const getPostComments = (postId) => {
  // (2) fetch all of that post's posts from `https://jsonplaceholder.typicode.com/posts/${postId}/comments` and
  // (3) return the response as an array of comment objects
  // (hint: the api returns comments as a stringified JSON array)
  // Your code here
};

// Your code here