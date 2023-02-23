import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css';
import { Board } from './components/Board';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <Board />
      </section>
      <section className={styles.right}>input and result section</section>
    </main>
  )
}

export default App
