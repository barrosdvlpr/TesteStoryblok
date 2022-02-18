import { sbEditable } from "@storyblok/storyblok-editable";

import { HomepageCard } from "./HomepageCard";


export const HomepageGrid = (blok) => {
  const { blocks } = blok;

  console.log("HomepageIntro", blok);

  return (
    <div {...sbEditable(blok)}>
      {blocks.map((item) => (
        <HomepageCard key={item._uid} {...item} />
      ))}
    </div>
  );
};
