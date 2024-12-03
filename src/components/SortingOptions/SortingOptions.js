import React from 'react';
import "./SortingOptions.css"

const SortingOptions = ({ onSort }) => {
  return (
    <div className='sorting-block'>
      <label className='label'>
      Сортировать по репозиториям:
        <select className='button' onChange={(e) => onSort(e.target.value)}>
          <option  value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>
    </div>
  );
};

export default SortingOptions;