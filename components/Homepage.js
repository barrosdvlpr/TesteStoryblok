import { HomepageIntro } from "./HomepageIntro";
import { HomepageGrid } from "./HomepageGrid";
import { HomepageFooter } from "./HomepageFooter";
import styles from "../styles/Home.module.css"

export const Homepage = ({ blok }) => {
  // console.log("Homepage", blok);

  const introBlok = blok.blocks.find(
    (item) => item.component === "homepage-intro"
  );

  const gridBlok = blok.blocks.find(
    (item) => item.component === "homepage-grid"
  );

  const footerBlok = blok.blocks.find(
    (item) => item.component === "homepage-footer"
  );

  return (
    
      <main className={styles.main}>
        <HomepageIntro {...introBlok} />
        <div className={styles.flex}>
          <HomepageGrid {...gridBlok} />
        </div>
        <HomepageFooter {...footerBlok} />
      </main>
    
  );
};
