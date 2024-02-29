import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards'
import '../assets/styles/cardList.scss'


const CardList = ({ data, kitapSil }) => {
    return (
        <section className='book-list'>
            <div className='card-list'>
                {
                    data.map(kitap =>
                        <Cards key={kitap.id} kitap={kitap} kitapSil={kitapSil} />
                    )
                }
            </div>
        </section>

    )
}

export default CardList