import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";
import styles from "../styles/Home.module.css"

export const HomepageCard = (blok) => {
  const { title, description, link } = blok;

  console.log("HomepageCard", blok);

  return (
    <div className={styles.card}>
      <Link href={link.cached_url}>
        <a {...sbEditable(blok)}>
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
};
