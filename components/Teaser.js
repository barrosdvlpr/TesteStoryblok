import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/Home.module.css"


export const Teaser = ( blok ) => {
  const { Teaser } = blok;

  return (
    <div>
      <h1 {...sbEditable(blok)}>
        {Teaser}
      </h1>
    </div>
  );
};
 
// export const HomepageIntro = (blok) => {
//   const { title, subtitle, code, link, description} = blok;

//   return (
//     <div {...sbEditable(blok)}>
//       <div className={styles.intro}>
//         <h1 className={styles.title}>{title}</h1>


// export const Teaser = ({ blok }) => {
//   return <h2 {...sbEditable(blok)}>{blok.headline}</h2>;
// };
 
