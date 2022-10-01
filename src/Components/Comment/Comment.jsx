import styles from './Comment.module.css'
 
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Comment (props) {
  return (
    <div className={styles.comment} >
      <Avatar  src='http://github.com/maykbrito.png' />

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
          <p>{props.content}</p>
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