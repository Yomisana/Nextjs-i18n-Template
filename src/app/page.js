import Image from "next/image";
import styles from "@/app/page.module.css";

import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/client/LocaleSwitcher/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("Page.DefaultPage");
  const Nav_list = {
    Docs: {
      url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    },
    Learn: {
      url: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    },
    Templates: {
      url: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    },
    Deploy: {
      url: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    },
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {t("Header description")}&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("By")}{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
          <LocaleSwitcher />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {Object.entries(Nav_list).map(([key, value]) => (
          <a
            key={key}
            href={value.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {t(`list title.${key}`)} <span>-&gt;</span>
            </h2>
            <p>{t(`list content.${key}`)}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
