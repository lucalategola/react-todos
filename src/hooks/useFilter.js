import { useState } from 'react';
import { FILTER_COMPLETED, FILTER_PENDING } from '../lib/filter';

const useFilter = () => {
  const [filter, setFilter] = useState({
    completed: false,
    pending: false
  });

  const handleFilter = (filterObject, checked) => {
    let newFilter = {};
    switch (filterObject.value) {
      case FILTER_COMPLETED:
        newFilter = {
          ...filter,
          completed: checked
        }
        break;
      case FILTER_PENDING:
        newFilter = {
          ...filter,
          pending: checked
        }
        break;
      default:
        break;
    }
    setFilter(newFilter);
  }

  return {
    filter,
    handleFilter
  }
}

export default useFilter;
