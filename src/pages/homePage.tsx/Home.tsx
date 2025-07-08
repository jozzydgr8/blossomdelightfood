
import { About } from "./About"
import { Header } from "./Header"
import { Advertisement } from "./Advertisement"
import { Product } from "./Product"
import { ProductMarquee } from "./ProductMarquee"
import { MarqueeWrite } from "./MarqueeWrite"
import { Quote } from "./Quote"
import {Footer} from './Footer'
export const Home = ()=>{
    return(
        <>
          
                
                <Header/>
                <About/>
                <Advertisement/>
                <ProductMarquee/>
                <Product/>
                <MarqueeWrite/>
                <Quote/>
                <Footer/>
          
        </>
    )
}