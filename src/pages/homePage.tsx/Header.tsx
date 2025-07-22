import { FlatButton } from "../../shared/FlatButton";
import { RightOutlined } from '@ant-design/icons';
import Navbar from "../../shared/Navbar";
import { useEffect } from "react";

export const Header = () => {
     useEffect(()=>{
        var container = document.querySelectorAll('.headerUp');
        var containerDown = document.querySelectorAll('.headerDown');
        container.forEach(container=>container?.classList.add('sectionAnimationUp'));
        containerDown.forEach(containerDown=> containerDown?.classList.add('sectionAnimationDown'))
       
    },[])
    return (
        <section className="headersection">
            <Navbar/>
           <div className="headerrelative">
             <div className="headercontent">
                <div className="headercontainer">
                    <div className="headercircle headerDown">
                        <h4>Savor the flavor of freshness</h4>
                        <h1 className="alternatetext">Welcome to</h1>
                        <h1>BLOSSOM DELIGHT</h1>
                        <div>
                            <a href="https://wa.link/5n26d2" rel="no-referrer" target="_blank">
                            <FlatButton
                                className="btnalternate btn-lg"
                                title="Discover More"
                                icon={<RightOutlined />}
                            />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </section>
    )
}
