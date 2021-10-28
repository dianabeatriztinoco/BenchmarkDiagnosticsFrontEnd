import { renderComments } from "./render-comments";
import { getUserPosts } from "./api-util";

// renderPosts should:
// (1) take a user id as an argument
export default function renderPosts(userId) {
  // (2) return an event handler which does the following:
  // Your code here
    // (a) removes the existing content of the `.post-list` element
    // (b) fetches all of the selected user's posts
    // (c) generates a collection of HTML elements (one for each post)
    // (i) each element should contain the post's title and body content
    // (ii) each element should have a click event listener attached that
    //  calls renderComments with an argument of post.id
    // (d) append the collection of post elements to the `article.posts-list`
    // (e) change the content of the `p.click-instructions` element to read
    //  "click on a post to view comments."
}
