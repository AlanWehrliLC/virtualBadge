import React from "react"

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <head>
        <title>AlanWehrliLC - DoWhile 2021</title>
      </head>

      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.avatar}>
              <span>
                <img src="/logo.svg" alt="Selo Éva Resolve" />
              </span>
            <img src="/profilePicture.png" alt="Foto Alan Wehrli" />
          </div>

          <h1 className={styles.nameAW}>Alan Wehrli</h1>
          <a className={styles.githubUser} href="https://github.com/AlanWehrliLC" target="_blank">
            <img src="/github.svg" alt="Icone GitHub" />
            AlanWehrliLC
          </a>

          <p className={styles.about}>
            A person focused on learning and always giving my best.
          </p>

          <ul className={styles.clutteredList}>
            <li>
              <a href="https://www.youtube.com/channel/UCNukIaxtjG5G4EmolQieARg" target="_blank">
                <img src="/youtube.svg" alt="Youtube" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/sralanw/" target="_blank">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/AlanW_LC" target="_blank">
                <img src="/twitter.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}