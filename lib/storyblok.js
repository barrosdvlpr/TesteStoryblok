import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
//   accessToken: "your-preview-token",
accessToken: "1KFz8I8Yxp6xtUWozwCvcwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
 
export default Storyblok;