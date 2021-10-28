import { getAllUsers } from "./api-util";
import renderPosts from "./render-posts";

export async function renderUsers() {
  // it should:
  // (1) invoke getAllUsers to fetch all users from the API
  // Your code here
  // (2) alphabetize the users
  // (3) generate a collection of HTML elements (one for every user)
  // (3a) each element should contain a paragraph with the user's username and a paragraph with the user's city
  // (3b) each element should have a click event listener attached that
  //    calls renderPosts with an argument of user.id
  //(4) append the collection of user elements to the `article.users-list`
}

