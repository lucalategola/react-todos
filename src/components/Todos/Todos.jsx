import Card from "../Card/Card";
import styles from "./Todos.module.css";

const Todos = ({ todos }) => {
  return (
    <div className={styles.cards} role="list">
      {todos.map((todo) =>
        <Card key={todo.id} data={todo} />
      )}
    </div>
  )
}

export default Todos;
