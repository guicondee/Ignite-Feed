import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

import  guiProfile  from '../../assets/guiProfile.jpg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="foto de capa"
      />

       <div className={styles.profile}>
        <img className={styles.avatar} src={guiProfile}/>

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