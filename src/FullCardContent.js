import './FullCardContent.css';
import { useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import { useParams } from 'react-router-dom';

const FullCardContent = () => {
    const {items} = useContext(ItemsContext);
    const { itemsId } = useParams();
    const item = items.find(item => (item.id) === itemsId)

    return (
        <article className="full-card">
            <h2>{item.id}. {item.name}</h2>
            <h3>{item.title}</h3>
            <img src={item.image} alt={`A depiction of ${item.name}`} width='100%' height='auto'/>
            <p>{item.details}</p>
            <p>Content credits to <a href="https://theafricantimes.com/ten-top-tourists-destinations-in-africa-2024/" target='blank'>The African Times</a></p>
        </article>
    );
}
 
export default FullCardContent;