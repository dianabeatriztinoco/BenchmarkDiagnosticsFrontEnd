
import userEvent from "@testing-library/user-event";
import { main } from "../src/index";
import { waitFor,  getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import fs from 'fs';
import path from 'path';
import fetch from "node-fetch";
global.fetch = fetch;

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'),'utf-8');
const bodyContent = html.slice(html.indexOf("<body>")+6,html.indexOf('</body>')-7);

global.window = {addEventListener: jest.fn()};
let userListChildren;
let postListChildren;

describe("DOM and UI", () => {
  beforeAll(()=>{
      document.body.innerHTML = bodyContent;
    
  });
   it('renders a page header', () => {
    expect(document.querySelector('h1')).not.toBeNull();
    expect(getByText(document, '~ User Post and Comment Dashboard ~')).toBeInTheDocument();
  });
   it('renders section headers for users, posts, and comments', () => {
    expect(document.querySelectorAll('h2')).toHaveLength(3);
    expect(getByText(document, 'Users')).toBeInTheDocument();
    expect(getByText(document, 'Posts')).toBeInTheDocument();
    expect(getByText(document, 'Comments')).toBeInTheDocument();
  });
  describe("Users Section",()=>{
    it("should render each user inside of `users-section`", async () => {
      const preRenderCount = document.querySelectorAll('.users-list > *').length;
      expect(preRenderCount).toBeLessThan(10);
      main();
      await waitFor(() => {
        userListChildren = document.querySelectorAll('.users-list > *');
        expect(userListChildren.length).toBe(preRenderCount + 10);
      });
    });
    it("should list each user alphabetically by username", async () => {
      await waitFor(() => {
        expect(userListChildren[0]).toHaveTextContent("Antonette");
      
      });
    });
    it("should list each user's username and city", async () => {
      await waitFor(() => {
         expect(userListChildren[0]).toHaveTextContent(
          "Wisokyburgh"
        );
      });
    });
  });
  describe("Posts", () => {
    it("should render a user's posts when a user is clicked", async () => {
      userEvent.click(userListChildren[0]);
      await waitFor(() => {
        postListChildren = document.querySelectorAll(".posts-list > *");
        expect(postListChildren.length).toBeGreaterThan(1);
      });
    });
    it("should render the correct user's posts and only the correct user's posts", async () => {
      await waitFor(() => {
        expect(postListChildren[0]).toHaveTextContent(
          "et ea vero quia laudantium autem"
        );
      });
      userEvent.click(userListChildren[2]);
      await waitFor(() => {
          postListChildren = document.querySelectorAll(".posts-list > *");
          expect(postListChildren.length).toBeGreaterThan(1);
          expect(postListChildren[0]).toHaveTextContent(
          "tempora rem veritatis voluptas quo dolores vero"
        );
        });
    });
  });
  describe("Comments", () => {
    it("should render a comments modal on clicking a post", async () => {
      expect(document.querySelector(".modal-background-overlay")).toHaveClass("hidden");
      userEvent.click(postListChildren[0]);
      await waitFor(() => {
        expect(document.querySelector(".modal-background-overlay")).not.toHaveClass(
          "hidden"
        );
      });
    });
    it("should display a post's comments in the modal", async () => {
      await waitFor(() => {
        expect(document.querySelector(".comments-list").children.length).toBeGreaterThan(0);
      });
    });
    it("should display the appropriate comments for the post clicked", () => {
      expect(document.querySelector(".comments-list").children[0]).toHaveTextContent(
        "cum voluptate sint voluptas veritatis"
      );
    });
    it("should close the modal when a user clicks outside of the element", async () => {
      await waitFor(() => {
        expect(document.querySelector(".modal-background-overlay")).not.toHaveClass(
          "hidden"
        );
      });
      userEvent.click(document.querySelector(".modal-background-overlay"));
      await waitFor(() => {
        expect(document.querySelector(".modal-background-overlay")).toHaveClass(
          "modal-background-overlay hidden"
        );
      });
    });
  });
});