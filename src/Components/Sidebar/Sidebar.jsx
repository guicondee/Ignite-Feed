import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

import  guiProfile  from '../../assets/guiProfile.jpg'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="foto de capa"
      />

       <div className={styles.profile}>
        <Avatar hasBorder={true} src={guiProfile} />

        <strong>Guilherme Condé</strong>
        <span>Web Developer</span>
       </div>

      <footer className={styles.footer}>
           <a href="#">
            <PencilLine size={17} />
            Editar seu Perfil
          </a>
      </footer>
    </aside>
  )
}