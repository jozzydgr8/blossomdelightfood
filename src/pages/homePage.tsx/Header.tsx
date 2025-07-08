import { FlatButton } from "../../shared/FlatButton";
import { RightOutlined } from '@ant-design/icons';
import Navbar from "../../shared/Navbar";

export const Header = () => {
    return (
        <section className="headersection">
            <Navbar/>
           <div className="headerrelative">
             <div className="headercontent">
                <div className="headercontainer">
                    <div className="headercircle">
                        <h3>Savor the flavor of freshness</h3>
                        <h1>Welcome to</h1>
                        <h1>Blossom Delight</h1>
                        <div>
                            <FlatButton
                                className="btnalternate btn-lg"
                                title="Discover More"
                                icon={<RightOutlined />}
                            />
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </section>
    )
}
