import { sbEditable } from "@storyblok/storyblok-editable";

import { HomepageCard } from "./HomepageCard";

import styles from "../styles/Home.module.css"

export const HomepageGrid = (blok) => {
  const { blocks } = blok;

  console.log("HomepageGrid", blok);

  // return null;

  return (
    <div {...sbEditable(blok)} className={styles.grid}>
      {blocks.map((item) => (
        <div >
          <HomepageCard key={item._uid} {...item}/>
        </div>
      ))}
    </div>
  );
};
