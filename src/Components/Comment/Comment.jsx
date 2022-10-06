import styles from './Comment.module.css'
 
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

export function Comment ({ content, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeCount() {
    setLikeCount((state) => {
        return state + 1
    })
  }


  function onDeleteComment() {
    deleteComment(content)
  }
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

            <button onClick={onDeleteComment} title='Deletar comentario'>
                <Trash size={24} />
            </button> 
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}