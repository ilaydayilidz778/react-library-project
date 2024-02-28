import './App.css'
import CardList from './components/CardList'
import Forms from './components/Form'
import Navi from './components/Navi'
import Search from './components/Search'
import { data } from './assets/data/data'

function App() {
  return (
    <>
      <Navi />
      <Search />
      <Forms />
      <CardList data={data} />
    </>
  )
}

export default App
