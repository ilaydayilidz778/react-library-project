import React from 'react'
import CardList from './CardList'
import Forms from './Form'
import Navi from './Navi'
import Search from './Search'

const Home = () => {
    return (
        <>
            <Navi />
            <Search />
            <Forms />
            <CardList />
        </>
    )
}

export default Home