import { FlatButton } from "../../shared/FlatButton";
import demoImage from '../../asset/whiterice.png';

const Style = {
    background: {
        backgroundImage: `url(${demoImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '200px',
    }
};

export const About = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div style={Style.background}></div>
                    </div>
                    <div className="col-md-6">
                        <h3>Welcome to Blossom Delight</h3>
                        <p>
                            At Blossom Delight, we bring you meals made with passion, flavor, and the freshest ingredients. 
                            From traditional favorites to modern twists, our dishes are crafted to satisfy every craving. 
                            Whether you're dining in, ordering out, or celebrating something special—we’re here to make it delicious.
                        </p>
                        <div>
                            <FlatButton title="Message Us" className="btndark" />
                            <a href="tel:08123456789" style={{ marginLeft: '10px' }}>081 2345 6789</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
