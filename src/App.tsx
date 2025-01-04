import { Header } from "./component/Header";
import styles from './App.module.css';

export function App() {

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>

            <input />

            <button>
              Criar
            </button>

        </div>

        <div className={styles.tasksList}>
          
        </div>
      </section>

    </main>
  )
}

