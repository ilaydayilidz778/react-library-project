import './App.css'
import CardList from './components/CardList'
import Forms from './components/Form'
import Navi from './components/Navi'
import Search from './components/Search'
import { data, dataKategoriler } from './assets/data/data'
import { useState } from 'react'

function App() {
  // const[stateName, setStateName] = useState(initialValue)
  const [kitaplik, setKitaplik] = useState(data);
  const [kategoriler, setKategoriler] = useState(dataKategoriler);
  const [arananKelime, setArananKelime] = useState('');

  const yeniKitapEkle = (yeni) => {
    setKitaplik(prevKitaplik => [...prevKitaplik, yeni]);
  };

  const kitapSil = (id) => {
    setKitaplik(prevKitaplik => prevKitaplik.filter(statedenGelen => statedenGelen.id !== id));

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
