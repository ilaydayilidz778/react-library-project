import React from 'react';
import Cards from './Cards';
import '../assets/styles/cardList.scss';

const CardList = ({ data, kitapSil, arananKelime, cardDuzenle }) => {
    return (
        <section className='book-list'>
            <h1 className='title'>
                BookHub Kütüphanesi
                <hr />
            </h1>
            <div className='card-list'>
                {data.map(kitap =>
                    !kitap.isDeleted &&
                    (
                        (kitap.kitapYazari.toLowerCase().startsWith(arananKelime.toLowerCase()) ||
                            kitap.kitapAdi.toLowerCase().startsWith(arananKelime.toLowerCase())) &&
                        <Cards key={kitap.id} kitap={kitap} kitapSil={kitapSil} cardDuzenle={cardDuzenle} />
                    )
                )}
            </div>
        </section>
    );
};

export default CardList;
