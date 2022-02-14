import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
//   accessToken: "your-preview-token",
accessToken: "wC7JZ7l7Nt4xkouUbDIVJQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
 
export default Storyblok;