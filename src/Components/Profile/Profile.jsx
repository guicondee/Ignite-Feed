import guiProfile from '../../assets/guiProfile.jpg'
import styles from './Profile.module.css'

export function Profile() {
  return (
      <img className={styles.avatar} src={guiProfile}/>
  )
}