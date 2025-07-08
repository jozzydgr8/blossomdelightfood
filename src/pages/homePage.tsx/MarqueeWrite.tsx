import Marquee from "react-fast-marquee"
import { marqueeWrite } from "../../shared/data"

export const MarqueeWrite = ()=>{
    return(
        <section style={{ overflowX: "hidden" }}>
            <div className="container-fluid" style={{ overflowX: "hidden" }}>
                <Marquee speed={50} gradient={false} style={{ overflowY: "hidden" }}>
                    {
                    marqueeWrite.map((write,index)=>(
                        <div style={{margin:'0 20px'}} key={index}>
                            <h1 className="bebas-neue">{write}</h1>
                        </div>
                    ))
                    }
                </Marquee>
            </div>
        </section>
    )
}