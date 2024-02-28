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

  const yeniKitapEkle = (yeni) => {
    setKitaplik([...kitaplik, yeni]);
  };

  const seciliKitabiSil = (id) => {
    const updatedKitaplik = kitaplik.filter(kitap => kitap.id !== id);
    setKitaplik(updatedKitaplik);
  };

  return (
    <>
      <Navi data={kategoriler} />
      <Search />
      <Forms yeniKitapEkle={yeniKitapEkle} kitaplik={kitaplik} />
      <CardList data={kitaplik} seciliKitabiSil={seciliKitabiSil} />
    </>
  )
}

export default App
