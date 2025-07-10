import Marquee from "react-fast-marquee"
import { meals } from "../../shared/data"
const Style={
    content:{
        height:"130px", 
        width:"130px", 
        borderRadius:'80%',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        margin:'0 20px'
    }
}
export const ProductMarquee = ()=>{
    return(
        <section className="productMarqueeSection">
            <div className="container-fluid">
                <Marquee speed={50}>
                    {meals.map((meal,index)=>(
                        <div style={{backgroundImage:`url(${meal.image})`,...Style.content}}>

                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}