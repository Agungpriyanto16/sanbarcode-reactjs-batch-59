import React, { useState } from 'react';
import '../App.css';

const Tugas8 = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="tugas8-container">
      <div className="count-display">{count}</div>
      <button className="increment-button" onClick={incrementCount}>
        Tambah
      </button>
      {count > 10 && <p className="warning-text">State count sudah lebih dari 10!!</p>}
    </div>
  );
};

export default Tugas8;
