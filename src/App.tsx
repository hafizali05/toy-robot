import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.container}>
      <section className={styles.left}>board section</section>
      <section className={styles.right}>input and result section</section>
    </main>
  )
}

export default App
