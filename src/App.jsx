import { Header } from "./Components/Header/Header"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import { Widgets } from "./Components/widgtes/Widgets"
import { Comment } from "./Components/Comment/Comment"

import global from './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'http://guicondee.github.io/Dr/' },
    ],
    publishedAt: new Date('2022-09-27 21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavowebjs.png',
      name: 'Gustavo Vinicios',
      role: 'CTO @Rampp'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: 'http://web.rampp.com.br/' },
    ],
    publishedAt: new Date('2022-09-28 15:17')
  },
]


export function App() {  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Widgets 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           })}
        </main>
      </div>
    </div>
  )
}

 
