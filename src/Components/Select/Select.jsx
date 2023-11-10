import React from 'react';
import { typeData } from '../../constants';

const Select = ({ saveFilter }) => {
  return (
    <div>
      <select onChange={(e) => saveFilter(e.target.value)}>
        {typeData.map((item) => (
          <option key={item.key} value={item.key}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
