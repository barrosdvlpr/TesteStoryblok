import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
//   accessToken: "your-preview-token",
accessToken: "MTcXnu5HTSIvSV7r9dK9MAtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
 
export default Storyblok;