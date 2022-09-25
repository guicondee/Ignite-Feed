import styles from './Widgets.module.css'

import  guiProfile  from '../../assets/guiProfile.jpg'

export function Widgets() {
  return (
     <main className={styles.widgets}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src={guiProfile} />

            <div className={styles.authorInfo}>
              <strong>Guilherme Condé</strong>
              <span>Dev Front-End</span>
            </div>
          </div>
         
          <time title='24 de Setembro às 20:19h' dataTime="2022-09-24 20:15">Públicado há 1 hora</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

         <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p><a target="blank" href="http://guicondee.github.io/Dr/"> 👉 Guilherme.design/doctorcare</a></p>

          <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href=""> #rocketseat</a></p>
        </div>
     </main>
  )
}