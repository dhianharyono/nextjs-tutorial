import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Images from "next/image"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Images src="/bird.png" alt="My Image" className="logo" width={200} height={200} />
        <h1 className={styles.title}>Welcome to My Blog</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts/my-firts-post">
              <h3>First Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/posts/my-second-post">
              <h3>Second Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}