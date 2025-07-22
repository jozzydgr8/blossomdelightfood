import { FlatButton } from "../../shared/FlatButton";
import demoImage from '../../asset/friedrice-chicken.png';

const Style = {
    background: {
        backgroundImage: `url(${demoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '350px',
    }
};

export const About = () => {
    return (
        <section id="about">
            <div className="container-fluid">
                <h2 className="animate-left">About Us</h2>
                <div className="row">

                    <div className="col-md-6" style={Style.background}>
                    
                    </div>
                    <div className="col-md-6 aboutcontainer">
                        <h3 style={{color:"white"}}>Welcome to Blossom Delight</h3>
                        <div className="animate-up">
                        <p>
                            At Blossom Delight, we bring you meals made with passion, flavor, and the freshest ingredients. 
                            From traditional favorites to modern twists, our dishes are crafted to satisfy every craving. 
                            Whether you're dining in, ordering out, or celebrating something special—we’re here to make it delicious.
                        </p>
                        <div>
                            <a href="https://wa.link/5n26d2" rel="no-referrer" target="_blank">
                            <FlatButton title="Message Us" className="btnoutline" />
                            </a>
                            
                            <a href='tel:08033122214' style={{ marginLeft: '10px' }}>+234 803 312 2214 </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
