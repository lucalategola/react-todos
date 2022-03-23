import { useState } from "react";
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterClick }) => {
  const [checked, setChecked] = useState(false);
  let className = '';

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onFilterClick(filter, newChecked);
  }

  if (checked) {
    className += 'checked';
  }

  return (
    <div className={`${styles.chip} ${styles[className]}`} onClick={handleClick} data-testid="chip">
      <span>{filter.label}</span>
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
    </div>
  )
}

export default Filter;
