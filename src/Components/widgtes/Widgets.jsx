import styles from './Widgets.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import  guiProfile  from '../../assets/guiProfile.jpg'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

export function Widgets({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
     'Projeto maneiro cara!'
  ])
  
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleOnSubmit() {
    event.preventDefault()

     setComments([...comments, newCommentText])
     setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
     <main className={styles.widgets}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder={true} src={ author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
         
          <time title={publishedDateFormatted} dataTime={publishedAt.toISOString()}>         
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return (
                <p>{line.content}</p>
              )
            } else if (line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleOnSubmit} className={styles.commentForm}>
          <strong>Deixe seu comentario</strong>
          <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name='comment'
          placeholder='Escreva seu comentario'
          />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment content={comment} />
          })}
        </div>
     </main>
  )
}