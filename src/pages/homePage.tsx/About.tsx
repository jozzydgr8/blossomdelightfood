import { FlatButton } from "../../shared/FlatButton";
import demoImage from '../../asset/friedrice-chicken.jpeg';

const Style = {
    background: {
        backgroundImage: `url(${demoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
    }
};

export const About = () => {
    return (
        <section>
            <div className="container-fluid">
                <h2>About Us</h2>
                <div className="row">

                    <div className="col-md-6" style={Style.background}>
                    
                    </div>
                    <div className="col-md-6 aboutcontainer">
                        <h3 style={{color:"white"}}>Welcome to Blossom Delight</h3>
                        <p>
                            At Blossom Delight, we bring you meals made with passion, flavor, and the freshest ingredients. 
                            From traditional favorites to modern twists, our dishes are crafted to satisfy every craving. 
                            Whether you're dining in, ordering out, or celebrating something special—we’re here to make it delicious.
                        </p>
                        <div>
                            <FlatButton title="Message Us" className="btnoutline" />
                            <a href="tel:08123456789" style={{ marginLeft: '10px' }}>081 2345 6789</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
