import axios from 'axios'
import './App.css'
import CardList from './components/CardList'
import Forms from './components/Form'
import Navi from './components/Navi'
import Search from './components/Search'

import { useEffect, useState } from 'react'

function App() {
  // const[stateName, setStateName] = useState(initialValue)
  const [kitaplik, setKitaplik] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [arananKelime, setArananKelime] = useState('');

  // kitapları api getirme
  const kitapGetir = async () => {
    const url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplik(kitaplar);
  }

  // kategorilier api getirme
  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await fetch(url);
    const kategoriler = await response.json();
    setKategoriler(kategoriler);
  }

  useEffect(() => {
    kitapGetir();
    kategorileriGetir();
  }, [])


  const yeniKitapEkle = async (yeni) => {
    setKitaplik(prevKitaplik => [...prevKitaplik, yeni]);
    const url = "http://localhost:3005/kitaplar";
    const response = await axios.post(url, yeni);
    console.log(response);
    // kitapGetir(); Hatalı gereksiz get isteği attı!
  };

  const kitapSil = async (id) => {
    setKitaplik(prevKitaplik => prevKitaplik.filter(statedenGelen => statedenGelen.id !== id));
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); // !! Tehlikeli
    const response = await axios.patch(url, { isDeleted: true });
    console.log(response);
  }

  return (
    <>
      <Navi data={kategoriler} />
      <Search setArananKelime={setArananKelime} />
      <Forms yeniKitapEkle={yeniKitapEkle} kitaplik={kitaplik} />
      <CardList data={kitaplik} kitapSil={kitapSil} arananKelime={arananKelime} />
    </>
  )
}

export default App
