import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './style.module.css';
import { Board } from '../components/Board';
import { CommandInput } from '../components/CommandInput';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <Board />
      </section>
      <section className={styles.right}>
        <CommandInput />
      </section>
    </main>
  )
}

export default App
