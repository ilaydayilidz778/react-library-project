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
  const [seciliKategori, setSeciliKategori] = useState('');
  const [duzenlenecekKitap, setDuzenlenecekKitap] = useState('');

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

  const yeniKitapEkleDuzenle = async (yeni) => {
    //kitap ekleme işlemi için 
    let url = "http://localhost:3005/kitaplar";
    if (!duzenlenecekKitap) {
      setKitaplik(prevKitaplik => [...prevKitaplik, yeni]);
      const yeniKitapResponse = await axios.post(url, yeni);
      console.log(yeniKitapResponse);
      // kitapGetir(); Hatalı gereksiz get isteği atar!
    }
    else {
      url += `/${duzenlenecekKitap.id}`;
      const duzenlenecekKitapResponse = await axios.put(url, yeni);
      console.log(duzenlenecekKitapResponse);
      setDuzenlenecekKitap('');
      setKitaplik(prevKitaplik =>
        prevKitaplik.map(kitap => {
          if (kitap.id === duzenlenecekKitap.id) {
            return { ...duzenlenecekKitapResponse.data }
          }
          else {
            return { ...kitap }
          }
        }));
    }
  };

  const kitapSil = async (id) => {
    setKitaplik(prevKitaplik => prevKitaplik.filter(statedenGelen => statedenGelen.id !== id));
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); // !! Tehlikeli
    const response = await axios.patch(url, { isDeleted: true });
    console.log(response);
  }

  const filtreyeGoreKitaplariGetir = async (seciliKategori) => {
    const url = `http://localhost:3005/kitaplar?kitapKategorisi=${seciliKategori}`;
    const response = await axios.get(url);
    setKitaplik(response.data);
  }

  useEffect(() => {
    seciliKategori &&
      filtreyeGoreKitaplariGetir(seciliKategori);
  }, [seciliKategori]);

  const cardDuzenle = (id) => {
    const duzenlenecekKitap = kitaplik.find(kitap => kitap.id === id);
    setDuzenlenecekKitap(duzenlenecekKitap);
  };

  return (
    <>
      <Navi data={kategoriler} setSeciliKategori={setSeciliKategori} />
      <Search setArananKelime={setArananKelime} />
      <Forms yeniKitapEkleDuzenle={yeniKitapEkleDuzenle} kitaplik={kitaplik} duzenlenecekKitap={duzenlenecekKitap} />
      <CardList data={kitaplik} kitapSil={kitapSil} arananKelime={arananKelime} cardDuzenle={cardDuzenle} />
    </>
  )
}

export default App
