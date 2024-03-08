import React, { useContext } from 'react';
import Cards from './Cards';
import '../assets/styles/cardList.scss';
import DataContext from '../context/DataContext';

const CardList = () => {
    const { state } = useContext(DataContext);
    const { kitaplik, arananKelime } = state;
    return (
        <section className='book-list'>
            <h1 className='title'>
                BookHub Kütüphanesi
                <hr />
            </h1>
            <div className='card-list'>
                {kitaplik.map(kitap =>
                    !kitap.isDeleted &&
                        (kitap.kitapYazari.toLowerCase().startsWith(arananKelime.toLowerCase()) ||
                            kitap.kitapAdi.toLowerCase().startsWith(arananKelime.toLowerCase()))
                        ? <Cards key={kitap.id} kitap={kitap} />
                        : null
                )}
            </div>

        </section>
    );
};

export default CardList;
