
import React, { useState } from 'react';
import { MdOutlineDelete } from "react-icons/md";
import './index.css'

function Home({ foydalanuvchi }) {
  const [kitobNomi, setKitobNomi] = useState('');
  const [kitoblar, setKitoblar] = useState([]);

  const kitobQoshish = () => {
    if (kitobNomi.trim() !== '') {
      const yangiKitoblar = [...kitoblar, kitobNomi];
      setKitoblar(yangiKitoblar);
      setKitobNomi('');
    }
  };

  
  const kitobOchirish = (index) => {
    const yangiKitoblar = [...kitoblar];
    yangiKitoblar.splice(index, 1);
    setKitoblar(yangiKitoblar);
  };

  return (
    <div className='main-wrapper'>
      <h1>Asosiy Sahifa</h1>
      <p>Salom, {foydalanuvchi}!</p>

     
      <div className='add-book'>
     
        <label>
          <span>Kitob qo'shish</span>
          <br />
        <input
          type="text"
          placeholder='typing...'
          value={kitobNomi}
          onChange={(e) => setKitobNomi(e.target.value)}
        />
        </label>
        <button onClick={kitobQoshish}>Qo'shish</button>
      </div>

      <div className='list-item'>
        <h2>Kitoblar ro'yxati</h2>
        <ul>
          {kitoblar.map((kitob, index) => (
            <li key={index}>
              {kitob}{' '}
              <button onClick={() => kitobOchirish(index)}><MdOutlineDelete /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home