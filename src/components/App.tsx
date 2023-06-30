import '../styles/global.scss'

import styles from './App.module.scss'
import GithubMark from './GithubMark'

const App = () => {
  return (
    <div className={styles.App}>
      <GithubMark />
      <div className={styles.mtv3Owl}>
        <div className={styles.body}>
          <div className={styles.eyeLeft}>
            <div className={styles.pupilLeft}></div>
          </div>
          <div className={styles.eyeRight}>
            <div className={styles.pupilRight}></div>
          </div>
          <div className={styles.nose}></div>
        </div>
      </div>
    </div>
  )
}

export default App
