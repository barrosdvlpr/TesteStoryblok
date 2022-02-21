import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Page from "./Page";
import { Homepage } from "./Homepage";
import { HomepageCard } from "./HomepageCard";
import { HomepageIntro } from "./HomepageIntro";
import { HomepageGrid } from "./HomepageGrid";
 
// resolve Storyblok components to Next.js components
const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
  Homepage: Homepage,
  HomepageCard: HomepageCard,
  HomepageIntro: HomepageIntro,
  HomepageGrid: HomepageGrid,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];

    return <Component blok={blok} key={blok._uid} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
