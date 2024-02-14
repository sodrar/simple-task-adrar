import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let appName = "Simple Task";
  let task = "Faire les courses";

  const [date, setDate] = useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 10);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  };

  const [tasks, setTasks] = useState([
    "faire mes devoirs",
    "apprendre à conduire",
    "faire à manger"
  ]);
  const tasksElements = tasks.map((task,i) => {
    return <li key={i}>{task}</li>
  });

  const [form, setForm] = useState("ici");

  const handleAddTask = () => {
    setTasks([...tasks, form]);
  }

  const handleTask = e => {
    e.preventDefault();
    setForm(e.target.value);
  };

  return (
    <div className="simple-task">
      <h1>TP Simple - Task</h1>
      <p>Vous pouvez écrire</p>
      <h3>N'importe quel balises HTML</h3>
      <div>
        <label htmlFor="task-input">Dans les composants React </label>
        <input type="text" name='task-input' id='task-input' />
      </div>
      <div>
        <h1>{appName}</h1>
        <ul>
          <li>{task}</li>
        </ul>
      </div>
      <div>
        <h1>{appName}</h1>
        <p>Il est {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} : {date.getMilliseconds()} </p>
        <h2>Bravo vous avez affiché l'heure !</h2>
        <p>Mais ça bouge pas des masses nan ?</p>
      </div>
      <div>
        <p>Mon panier : <span>{count}</span></p>
        <button onClick={handleClick}>Ajouter au panier</button>
      </div>
      <div>
        <ul>
          <li>Faire mes devoirs</li>
          <li>Apprendre à conduire</li>
          <li>Ne plus arriver en retard</li>
        </ul>
      </div>
      <div>
        <ul>
          {tasks}
        </ul>
      </div>
      <div>
        <ul>
          {tasksElements}
        </ul>
      </div>
      <div>
        <input type="text" name="form" id="form" value={form} onInput={handleTask} />
        <button onClick={handleAddTask}>Add task</button>
      </div>
    </div>
  )
}

export default App
