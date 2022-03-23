import { useEffect, useState } from 'react';
import { formatDate, diffDateFromCurrent } from '../../lib/date';
import styles from './Card.module.css';

const getImageFromDateDiff = (dateDiff) => {
  if (dateDiff <= 3) {
    return './img/red.webp';
  } else if (dateDiff >= 4 && dateDiff <= 7) {
    return './img/orange.webp';
  } else {
    return './img/green.webp';
  }
}

const Card = ({ data }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dateDueOnToLocale, setDateDueOnToLocale] = useState();
  const [image, setImage] = useState();

  const handleClick = () => {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    setDateDueOnToLocale(formatDate(data.due_on));
    const dateDueDiff = diffDateFromCurrent(data.due_on);
    setImage(getImageFromDateDiff(dateDueDiff));
  }, [data.due_on]);

  let isOpenedClassName = '';
  if (isOpened) {
    isOpenedClassName = 'open';
  }

  return (
    <article className={styles.card} role="listitem">
      <img width="345" height="194" className={styles.media} src={image} alt={data.title} />
      <header>
        <h2>{data.title}</h2>
        <time dateTime={data.due_on}>Due On: {dateDueOnToLocale}</time>
      </header>
      <div className={styles.actions}>
        <button className={styles[isOpenedClassName]} aria-expanded="true" aria-label="show more" onClick={handleClick}>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
          <span></span>
        </button>
      </div>
      <div className={`${styles.collapse} ${styles[isOpenedClassName]}`}>
        <div className={styles.wrapper}>
          <p><span className={styles.label}>Status: </span>{data.status}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
