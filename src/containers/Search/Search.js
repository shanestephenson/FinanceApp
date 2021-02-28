import React from 'react';
import './Search.css';

const search = props => {

  return (
    <div className="Search">
      <input type="text" placeholder="Search by symbol/company" />
      <button>Search</button>
    </div>
  );
};

export default search;
