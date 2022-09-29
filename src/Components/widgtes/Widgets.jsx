import styles from './Widgets.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import  guiProfile  from '../../assets/guiProfile.jpg'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

export function Widgets({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

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

        <form className={styles.commentForm}>
          <strong>Deixe seu comentario</strong>
          <textarea
          placeholder='Escreva seu comentario'
          />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
     </main>
  )
}