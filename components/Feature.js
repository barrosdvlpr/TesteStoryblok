import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/Home.module.css"
 

export const Feature = ( blok ) => {
  const { Feature } = blok;
  

  return (
    <div>
      <h2 {...sbEditable(blok)}>
        {Feature}
      </h2>
    </div>
  );
};


// export const Feature = ({ blok }) => (
//   <div {...sbEditable(blok)}>
//     {blok.name}
//   </div>
// );
 