import './Points.css'

const Points = ({image, points, example}) => {
    return (
        <section className="points">
            <img src={image} alt={`Depiction of ${example}`} width='200' height='auto' />
            <h3>{example}</h3>
            <p>{points}</p>
        </section>
    );
}
 
export default Points;