import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards'
import '../assets/styles/cardList.scss'


const CardList = ({ data }) => {
    return (
        <section className='book-list'>
            <div className='card-list'>
                {
                    data.map(kitap =>
                        <Cards key={kitap.id} kitap={kitap} />
                    )
                }
            </div>
        </section>

    )
}

export default CardList