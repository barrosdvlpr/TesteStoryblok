import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";

export const HomepageCard = (blok) => {
  const { title, description, link } = blok;

  console.log("HomepageCard", blok);

  return (
    <Link href={link.cached_url}>
      <a {...sbEditable(blok)}>
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
    </Link>
  );
};
