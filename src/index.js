import { renderUsers } from "./scripts/render-users";
import { configureModal } from "./scripts/render-comments";
import "./styles/index.scss";

// index.js serves as an entry file for webpack
// additionally, it
// (1) adds an event listener to the window for the DOMContentLoaded event
window.addEventListener("DOMContentLoaded", main);

// (2) defines a callback `main` that configures the modal and renders users
export async function main() {
  // write your code here
  configureModal();
  renderUsers();
}