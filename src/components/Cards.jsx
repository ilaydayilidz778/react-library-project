import React from 'react';
import '../assets/styles/card.scss';
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineModeEdit } from 'react-icons/md'

const maxLength = 170;
const Cards = (props) => {
    return (
        <section key={props.kitap.id} className='book'>
            <div className='book-card'>
                <button className='delete'><AiOutlineDelete /></button>
                <button className='edit'><MdOutlineModeEdit /></button>
                <img src={props.kitap.kitapResmi} alt="kitap-kapak" />
                <div className='book-card-body'>
                    <h6 className='title'>{props.kitap.kitapAdi}</h6>
                    <hr />
                    <p><strong>Kitap Yazarı:</strong>{props.kitap.kitapYazari}</p>
                    <p><strong>Kitap Türü:</strong>{props.kitap.kitapKategorisi}</p>
                    <p><strong>Sayfa Sayısı:</strong>{props.kitap.kitapSayfaSayisi}</p>
                    <p>
                        <strong>Kitap Açıklaması:</strong>
                        {props.kitap.kitapAciklamasi.length > 170 ? props.kitap.kitapAciklamasi.substring(0, props.kitap.kitapAciklamasi.substring(0, maxLength + 1).lastIndexOf(" ")) + "..." : props.kitap.kitapAciklamasi}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Cards;
