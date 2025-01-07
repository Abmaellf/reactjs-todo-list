import { Header } from "./component/Header";
import styles from './App.module.css';
import { Input } from "./component/Input";
import { Button } from "./component/Button";

export function App() {

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>

            <Input />

            <Button />

        </div>

        <div className={styles.tasksList}>
          
        </div>
      </section>

    </main>
  )
}

