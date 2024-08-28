import React from 'react';
import '../App.css';

const Tugas7 = ({ name, batch, email }) => {
  return (
    <div className="tugas7">
    <div className="card">
      <h2>Data diri peserta kelas Reactjs</h2>
      <ul>
        <li><strong>Nama Lengkap:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Batch Pelatihan:</strong> {batch}</li>
      </ul>
    </div>
    </div>
  );
};

export default Tugas7;
