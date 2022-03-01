import { sbEditable } from "@storyblok/storyblok-editable";
import React from "react";
// import styles from "../styles/Home.module.css"


export const ComponentBlok = ( blok ) => {
  const { title, description } = blok;

  console.log("ComponentBlok", blok);

  // return null;

  return (
    <div>
      <h1 {...sbEditable(blok)}>
        {title}
      </h1>
      <h2 {...sbEditable(blok)}>
        {description}
      </h2>
    </div>
  );
};

export const DocumentationGrid = (blok) => {
  const { blocks } = blok;

  console.log("DocumentationGrid", blok);

  // return null;

  return (
    <div {...sbEditable(blok)}>
      {blocks.map((item) => (
        <ComponentBlok key={item._uid} {...item}/>
      ))}
    </div>
  );
};

export const Documentation = ({ blok }) => {

  console.log("Documentation", blok);

  const documentationBlok = blok.blocks.find(
    (item) => item.component === "Documentation-grid"
  );

  // return null;

  return ( 
    <main>
      <DocumentationGrid {...documentationBlok}/>
    </main>
  );
};
























































































// import { sbEditable } from "@storyblok/storyblok-editable";

// import {Teaser} from "./Teaser";
// import {Feature} from "./Feature";

// import styles from "../styles/Home.module.css"

// export const documentation = (blok) => {
//   const { blocks } = blok;

//   console.log("Documentation", blok);

//   // return null;

//   return (
//     <div {...sbEditable(blok)}>
//       {blocks.map((item) => (
//           <Teaser key={item._uid} {...item}/>,
//           <Feature key={item._uid} {...item}/>
//       ))}
//     </div>
//   );
// };
