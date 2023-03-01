import styles from './style.module.css';
import { Board } from '../components/Board';
import { CommandInput } from '../components/CommandInput';
import { GlobalContextProvider } from '../Context';

function App() {

  return (
    <GlobalContextProvider>
    <main className={styles.container}>
      <section className={styles.left}>
        <Board />
      </section>
      <section className={styles.right}>
        <CommandInput />
      </section>
    </main>
    </GlobalContextProvider>
  )
}

export default App
