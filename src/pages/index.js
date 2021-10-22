import React, {useEffect, useState} from 'react'

import styles from './home.module.scss'

export default function Home() {
  const [gitHub,setGitHub] = useState({})

  const linksSociaMedia = {
    github: 'AlanWehrliLC',
    youtube: 'UCNukIaxtjG5G4EmolQieARg',
    instagram: 'sralanw',
    twitter: 'AlanW_LC'
  }

  const url = `https://api.github.com/users/${linksSociaMedia.github}`

  useEffect(()=>{
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {setGitHub(data)})
  },[])

  return (
    <>
      <head>
        <title>AlanWehrliLC - DoWhile 2021</title>
      </head>

      <main className={styles.main}>
      <div className={styles.cord}></div>
    <div className={styles.hole}></div>
        <section className={styles.container}>
          <div className={styles.avatar}>
            <span>
              <img src="/logo.svg" alt="Selo Éva Resolve" />
            </span>
            <img src={gitHub.avatar_url} alt="Foto Alan Wehrli" />
          </div>

          <h1 className={styles.nameAW}>{gitHub.name}</h1>
          <a
            className={styles.githubUser}
            href={`https://github.com/${linksSociaMedia.github}`}
            target="_blank"
          >
            <img src="/github.svg" alt="Icone GitHub" />
            {gitHub.login}
          </a>

          <p className={styles.about}>
          {gitHub.bio}
          </p>

          <ul className={styles.clutteredList}>
            <li>
              <a
                href={`https://www.youtube.com/channel/${linksSociaMedia.youtube}`}
                target="_blank"
              >
                <img src="/youtube.svg" alt="Youtube" />
              </a>
            </li>

            <li>
              <a
                href={`https://www.instagram.com/${linksSociaMedia.instagram}/`}
                target="_blank"
              >
                <img src="/instagram.svg" alt="Instagram" />
              </a>
            </li>

            <li>
              <a
                href={`https://twitter.com/${linksSociaMedia.twitter}`}
                target="_blank"
              >
                <img src="/twitter.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
