import './Footer.css'
import Logo from './logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Official logo" width={100} height={50}/>
            <section>
                <h3>Working hours</h3>
                <p>Weekdays: 9am-5pm</p>
                <p>Weekends: 11am-2pm</p>
            </section>
            <section>
                <h3>Address</h3>
                <address>
                4 Privet Drive,
                <br />
                Little Whinging,
                <br />
                Surrey.
                </address>
            </section>
            <section>
                <h3>Connect with us on:</h3>
                <p><a href="https://www.instagram.com/" target='blank'>Instagram</a></p>
                <p><a href="https://x.com/?lang=en" target='blank'>X</a></p>
                <p><a href="https://www.linkedin.com/login" target='blank'>LinkedIn</a></p>
            </section>
        </footer>
    );
}
 
export default Footer;