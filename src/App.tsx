import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import styles from './App.module.css';

import { Button } from "./component/Button";
import { Header } from "./component/Header";
import { Input } from "./component/Input";
import { Empty } from "./component/List/Empty";
import { Header as ListHeader } from "./component/List/Header";
import { Item } from "./component/List/Item";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean
}

export function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]) // ESTADO=VARIÁVEIS QUE EU QUERO QUE O COMPONENT MONITORE
  const [inputValue, setInputValue] = useState('');// PROGRAMAÇÃO DECLARATIVA

  const checkedTasksCounter = tasks.reduce((preValue, currentTask)=>{ // CONTA AS TASK(TAREFAS) QUE ESTÃO CHECKED (MARCADAS, FINALIZADAS)
    if(currentTask.isChecked === true) {
      return preValue + 1
    }
    return preValue;
  }, 0)

  // FUNÇÕES
  // ADICIONA UMA NOVA TASK(TAREFA)
  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
  }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    // LEITURA
    // Só vai adicionar a tarefa(task) na nova lista(filteredTasks) Se o 
    // ID da tasks corrente(atual)  for diferente, pois sé for igual é esse que
    // será excluido - ISSO É IMUTABILIDADE

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>

          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

            <Button onClick={handleAddTask}>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
        </div>

        <div className={styles.tasksList}>

          <ListHeader
            tasksCounter = {tasks.length} //CONTA QUANTAS TAREFAS TEM
            checkedTasksCounter={checkedTasksCounter} // VERIFICA QUA
          />

          {tasks.length > 0 ? (
            <div>
              {/* MAP SEMPRE RETORNA UMA LISTA */}
             {tasks.map((task) => (
                <Item 
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
             ))}
            </div>

            ):(
              <Empty />
          )}
          
        </div>
      </section>

    </main>
  )
}

