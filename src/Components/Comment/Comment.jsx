import styles from './Comment.module.css'
 
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Comment () {
  return (
    <div className={styles.comment} >
      <Avatar hasBorder={false} src='http://github.com/guicondee.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Condé</strong>
              <time 
                title='24 de Setembro às 20:19h' 
                dataTime="2022-09-24 20:15">
               Cerca de 2h atrás 
              </time>
            </div>

            <button title='Deletar comentario'>
                <Trash size={24} />
            </button> 
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}