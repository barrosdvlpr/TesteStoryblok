import { sbEditable } from "@storyblok/storyblok-editable";

export const HomepageIntro = (blok) => {
  const { title, subtitle } = blok;

  return (
    <div {...sbEditable(blok)}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};
