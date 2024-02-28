import React from 'react';
import '../assets/styles/card.scss';
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineModeEdit } from 'react-icons/md'

const maxLength = 170;
const Cards = ({ kitap }) => {
    return (
        <section key={kitap.id} className='book'>
            <div className='book-card'>
                <button className='delete'><AiOutlineDelete /></button>
                <button className='edit'><MdOutlineModeEdit /></button>
                <img src={kitap.kitapResmi} alt="kitap-kapak" />
                <div className='book-card-body'>
                    <h6 className='title'>{kitap.kitapAdi}</h6>
                    <hr />
                    <p><strong>Kitap Yazarı:</strong>{kitap.kitapYazari}</p>
                    <p><strong>Kitap Türü:</strong>{kitap.kitapKategorisi}</p>
                    <p><strong>Sayfa Sayısı:</strong>{kitap.kitapSayfaSayisi}</p>
                    <p>
                        <strong>Kitap Açıklaması:</strong>
                        {kitap.kitapAciklamasi.length > 170 ? kitap.kitapAciklamasi.substring(0, kitap.kitapAciklamasi.substring(0, maxLength + 1).lastIndexOf(" ")) + "..." : kitap.kitapAciklamasi}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Cards;
