import Filter from '../Filter/Filter';
import Todos from '../Todos/Todos';
import styles from './Main.module.css';

const Main = ({ todos, filtersValue, handleFilter }) => {
  return (
    <main>
      <section className="filters">
        <h2>Choose todos</h2>
        <div className={styles.chips}>
          {filtersValue.map((filterValue, index) =>
            <Filter key={index} filter={filterValue} onFilterClick={handleFilter} />
          )}
        </div>
      </section>
      <Todos todos={todos} />
    </main>
  );
}

export default Main;
