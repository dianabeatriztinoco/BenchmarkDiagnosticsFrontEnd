import { getPostComments } from "./api-util";

// render comments should:
//  (1) take a postId as an argument
export function renderComments(postId) {
  //  (2) return an event handler which does the following:
  // Your code here
    // (a) removes the existing content of the `.comments-list` element
    // (b) toggles the visibility of the `modal-background-overlay` element (hint: there is a `hidden` class provided)
    // (c) fetches the post's comments
    // (d) generates a collection of HTML elements (one for each comment)
    // (i) each element should contain the comment's name, the email of the commenter,
    //    and the comment's body content
    // (e) append the collection of comment elements to the `article.comments-list`
}

export function configureModal() {
  // this function should:
  // (1) apply a click event listener to the `.modal-background-overlay` element that should:
  // Your code here
    // (a) hide the element if a user clicks outside of the modal (hint: the `hidden` class is provided by default)
}
