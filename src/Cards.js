import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({id, name, title, image, details}) => {
    return (
        <section className="card">
            <Link to={`/destinations/${id}`} className='card-links'>
            <h3>{id}. {name} : {title}</h3>
            <img src={image} alt={`A depiction of ${name}`} width='200' height='auto'/>
            <p>{details.slice(0, 40)}...</p>
            </Link>
        </section>
    );
}

export default Cards;