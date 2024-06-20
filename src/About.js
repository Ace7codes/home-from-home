import './About.css';
import Airplane from './Airplane.png';
import Tower from './Berlin-TV-Tower.png';
import Gate from './Golden-Gate-Bridge.png';
import Points from './Points';

const About = () => {

    const pointArr = [
        {
        image : Airplane,
        example : 'Smooth confortable flights',
        points : "We're renowned for our smooth flight plans, ease of movement in the case of a connecting flight and sfety of client's luggages"
    },
        {
        image : Tower,
        example : 'World class tour locations',
        points : "We're renowned equally known for our well-organised tours of popular monuments and landmarks, in partnership with some of the best tour guide agencies, giving you value for your money, seemlessly blending your vacation with fun and education."
    },
        {
        image : Gate,
        example : 'Safety',
        points : "We're commited to our clients' safety, and as a result, we make it a point to visit only safe locations and provide additional security for all our clients"
    },

    ];
    return (
        <section className="about">
            <section className="about-hero">
            <h2>Explore Africa with HomefromHome Africa</h2>
            </section>
            <section className="about-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto similique aliquid ipsa voluptates, nemo necessitatibus harum itaque accusamus ad optio consequatur deleniti dolore quam labore velit maxime iste recusandae doloremque!
                Repellat nesciunt quo excepturi error atque quae maiores ad, minus, temporibus voluptatibus modi totam eum culpa voluptatem pariatur quaerat adipisci. Nihil aliquam eius cupiditate nemo saepe deleniti, a repudiandae commodi.
                Provident quasi ad eligendi in pariatur, est magni quidem eum, aliquam quaerat nobis iste ipsam enim autem placeat? Distinctio impedit molestiae nemo obcaecati repellendus sunt quisquam soluta sint laudantium doloremque!
                Natus impedit consequuntur, praesentium facilis minus tenetur dolorum, hic vitae ipsam sunt quidem alias voluptatibus doloribus distinctio tempora facere, dolore numquam obcaecati asperiores. Eligendi nulla accusamus maiores praesentium in qui.
                Placeat voluptate assumenda in veritatis facilis modi nam est minima voluptatem, delectus distinctio perspiciatis, dolor laudantium corporis consequatur porro beatae iste totam! Facilis delectus, eligendi sapiente quam autem necessitatibus dolorem!</p>
            </section>
            <section className="choose-us">
                <Points image={pointArr[0].image} example={pointArr[0].example} points={pointArr[0].points} />
                <Points image={pointArr[1].image} example={pointArr[1].example} points={pointArr[1].points} />
                <Points image={pointArr[2].image} example={pointArr[2].example} points={pointArr[2].points} />
            </section>
        
        </section>
    );
}
 
export default About;