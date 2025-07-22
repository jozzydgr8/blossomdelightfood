import {EnvironmentOutlined, SendOutlined}from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { FacebookOutlined } from '@ant-design/icons';
import { TikTokOutlined } from '@ant-design/icons';
export const Footer = ()=>{
    return(
        <section id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                    <h4>Our Locations</h4>
                        <EnvironmentOutlined/> Blossom Delight, C7 Novare mall, Shoprite, sangotedo-Ajah, Lagos <br/><br/>
                        <EnvironmentOutlined/> Blossom House Km17, Opp Total Petrol Station Lekki-Epe ExpWay<br/><br/>
                        <EnvironmentOutlined/> Blossom Cakes, Blenco Supermarket. Lekki Epe ExpWay, Lagos <br/><br/>
                        <EnvironmentOutlined/> Blossom Delight Foods OJAJA Mall Ogombo. Opp Lekki Scheme 2<br/><br/>
                        <EnvironmentOutlined/> Shop c08 Cocoa Mall Dugbe Ibadan, Oyo state<br/><br/>
                        
                    </div>

                    <div className="col-md-4">
                        <h4>Contact Section</h4>
                        Phone No: <a href='tel:08033122214'>+234 803 312 2214 </a><br/><br/>
                       
                        Phone No: <a href='tel:08025590852'>+234 802 559 0852</a><br/><br/>
                       
                    </div>
                        
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <a href='tel:08033122214'>Call us now: +234 803 312 2214 </a>
                        <br/> <br/>
                        <a href="https://wa.link/5n26d2" rel="noreferrer" target="_blank">Send Us a message on Whatsapp <SendOutlined/></a><br/> <br/>
                        <a href='https://theblossomcakes.com' rel='noreferrer' target='_blank'>Our Cakes</a><br/><br/>
                    </div>
                </div>
                <br/> <br/>
                <div className='footer-icons'>
                    <a href='https://wa.link/o2oy0h' target='_blank' rel='noreferrer'><WhatsAppOutlined/></a>
                    <a href='https://www.instagram.com/blossom_delight_restaurant/' target='_blank' rel='noreferrer'><InstagramOutlined/></a>
                    <a href='https://web.facebook.com/profile.php?id=61572305035694' target='_blank' rel='noreferrer'><FacebookOutlined/></a>
                    <a href='https://www.tiktok.com/@blossomdelightrestaurant' target='_blank' rel='noreferrer'><TikTokOutlined/></a>
                </div>
                <br/> <br/>
                <small><a href='https://jozzycodes.com' target='_blank' rel='noreferrer'>© Blossomdelight 2025</a></small>
            </div>
        </section>
    )
}