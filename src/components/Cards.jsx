import React from 'react';
import '../assets/styles/card.scss';
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineModeEdit } from 'react-icons/md'

const Cards = ({ kitap, kitapSil, cardDuzenle }) => {
    return (
        <section key={kitap.id} className='book'>
            <div className='book-card'>
                <button
                    onClick={() => kitapSil(kitap.id)}
                    className='delete'><AiOutlineDelete /></button>
                <button
                    onClick={() => cardDuzenle(kitap.id)}
                    className='edit'><MdOutlineModeEdit /></button>
                <img src={kitap.kitapResmi} alt="kitap-kapak" />
                <div className='book-card-body'>
                    <h6 className='book-title'>{kitap.kitapAdi}</h6>
                    <hr />
                    <p><strong>Kitap Yazarı:</strong>{kitap.kitapYazari}</p>
                    <p><strong>Kitap Türü:</strong>{kitap.kitapKategorisi}</p>
                    <p><strong>Sayfa Sayısı:</strong>{kitap.kitapSayfaSayisi}</p>
                    <p>Kitap Açıklaması: {
                        kitap.kitapAciklamasi.length > 170 ?
                            kitap.kitapAciklamasi.substring(0, kitap.kitapAciklamasi.substring(0, 170).lastIndexOf(" ")) + "..." :
                            kitap.kitapAciklamasi
                    }
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Cards;
