import React from 'react';
import Cards from './Cards';
import '../assets/styles/cardList.scss';

const CardList = ({ data, kitapSil, arananKelime }) => {
    return (
        <section className='book-list'>
            <div className='card-list'>
                {data.map(kitap =>
                    (kitap.kitapYazari.toLowerCase().startsWith(arananKelime.toLowerCase()) ||
                        kitap.kitapAdi.toLowerCase().startsWith(arananKelime.toLowerCase())) &&
                    <Cards key={kitap.id} kitap={kitap} kitapSil={kitapSil} />
                )}
            </div>
        </section>
    );
};

export default CardList;
