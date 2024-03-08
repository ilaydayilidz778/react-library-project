import React, { useState } from 'react';
import '../assets/styles/loginPage.scss';
import Book from '../assets/img/book.png';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='main-page'>
      <div className="animate">
        <h3>Boost</h3>
        <h3>Online-6</h3>
        <h3>Kütüphanesi</h3>
        <img src={Book} alt="book" className="book" />
        <img src={Book} alt="book" className="book1" />
        <img src={Book} alt="book" className="book2" />

      </div>
      <form>
        <h3>Giriş Yap</h3>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Kullanıcı Adı' />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Parola' />
        <input type="submit" value="Giriş" />
        <a href="/">Giriş yapmadan devam etmek için tıklayınız...</a>
      </form>
    </div>
  )
}

export default LoginPage