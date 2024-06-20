import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <section className="hero-main">
                <h1>DISCOVER AFRICA</h1>
                <p>More than half of the African continent is covered by grassland or savannah. Northern Africa is dominated by the vast Sahara desert and the semi-arid Sahel zone which also includes fertile land in the Nile delta. Central Africa has rainforests, coastal plains and the continents highest mountains and lakes. Southern Africa lies mainly on a high plateau and only has a small coastal band.
                The Cape Floral Region in South Africa has the most plant varieties in the world!</p>
            </section>
            <section className="btn-link">
                <Link to="/destinations">View Destinations</Link>
            </section>
        </section>
    );
}
 
export default Hero;