import { ReactComponent as Github } from '../static/githubMark.svg'

import styles from './GithubMark.module.scss'

const GithubMark = () => {
  return (
    <a
      href="https://github.com/renodesu/pure-css-mtv3-owl"
      target="_blank"
      rel="noreferrer"
      className={styles.link}
      title="Check out the source code on Github!"
    >
      <Github className={styles.githubMark} />
      @renodesu
    </a>
  )
}

export default GithubMark
