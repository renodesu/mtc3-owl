import React from 'react'

import githubDark from '../static/GitHub-Mark-64px.png'

import styles from './GithubMark.module.scss'

const GithubMark = () => {
  return (
    <a
      href="https://github.com/renodesu/pure-css-mtv3-owl"
      target="_blank"
      rel="noreferrer"
      className={styles.githubMark}
      title="Check out the source code on Github!"
    >
      <img src={githubDark} alt="" width={32} height={32} />
    </a>
  )
}

export default GithubMark
