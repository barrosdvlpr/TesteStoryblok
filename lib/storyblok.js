import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
//   accessToken: "your-preview-token",
accessToken: "rxrZdDgMMT39RVFfPyMRtQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
 
export default Storyblok;