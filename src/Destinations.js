import './Destinations.css';
import Cards from './Cards';
import { useContext } from 'react';
import { ItemsContext } from './ItemsContext';

const Destinations = () => {
    const {items} = useContext(ItemsContext);

    return (
        <main className='destinations'>
            <section className="destination">
                <Cards id={items[0].id} name={items[0].name}title={items[0].title} image={items[0].image} details={items[0].details} />
                <Cards id={items[1].id} name={items[1].name}title={items[1].title} image={items[1].image} details={items[1].details} />
                <Cards id={items[2].id} name={items[2].name}title={items[2].title} image={items[2].image} details={items[2].details} />
                <Cards id={items[3].id} name={items[3].name}title={items[3].title} image={items[3].image} details={items[3].details} />
                <Cards id={items[4].id} name={items[4].name}title={items[4].title} image={items[4].image} details={items[4].details} />
                <Cards id={items[5].id} name={items[5].name}title={items[5].title} image={items[5].image} details={items[5].details} />
                <Cards id={items[6].id} name={items[6].name}title={items[6].title} image={items[6].image} details={items[6].details} />
                <Cards id={items[7].id} name={items[7].name}title={items[7].title} image={items[7].image} details={items[7].details} />
                <Cards id={items[8].id} name={items[8].name}title={items[8].title} image={items[8].image} details={items[8].details} />
                <Cards id={items[9].id} name={items[9].name}title={items[9].title} image={items[9].image} details={items[9].details} />
            </section>
        </main>
    );
}

export default Destinations;