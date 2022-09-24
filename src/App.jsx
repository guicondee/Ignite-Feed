import { Header } from "./Components/Header/Header"
import { Sidebar } from "./Components/Sidebar/Sidebar"

import global from './global.css'
import styles from './App.module.css'

export function App() {  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </div>
  )
}

 
