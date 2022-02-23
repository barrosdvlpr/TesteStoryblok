import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";
import styles from "../styles/Home.module.css"

export const HomepageIntro = (blok) => {
  const { title, subtitle, code, link, description} = blok;

  return (
    <div {...sbEditable(blok)}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{title}</h1>
        <Link href={link.cached_url}>
        <h1 className={styles.title}>
          <a {...sbEditable(blok)}>
            <p>{description}</p>
          </a>
        </h1>  
        </Link> 
      </div>
      <h2 className={styles.description}>{subtitle}
        <code className={styles.code}>{code}</code>
      </h2>
      {/* <h1 className={styles.title}>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p> */}
    </div>
  );
};
