import { HomepageIntro } from "./HomepageIntro";
import { HomepageGrid } from "./HomepageGrid";

export const Homepage = ({ blok }) => {
  // console.log("Homepage", blok);

  const introBlok = blok.blocks.find(
    (item) => item.component === "homepage-intro"
  );

  const gridBlok = blok.blocks.find(
    (item) => item.component === "homepage-grid"
  );

  return (
    <main>
      <HomepageIntro {...introBlok} />
      <HomepageGrid {...gridBlok} />
    </main>
  );
};
