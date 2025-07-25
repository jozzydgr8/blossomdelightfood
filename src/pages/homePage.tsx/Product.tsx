import { Col, Row } from "antd"
import { meals } from "../../shared/data"
import Marquee from "react-fast-marquee";
const Style = {
    content:{
        height:'200px',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat'
    }
}
export const Product = ()=>{
    return(
        <section id="product">
            <div className="container-fluid">
                <h2>We Serve</h2>
                <Row gutter={[16,24]}>
                {
                    meals.slice(0,12).map((meal,index)=>(
                        <Col lg={6} md={8} sm={24} xs={24} key={index}>
                            <div style={{...Style.content, backgroundImage:`url(${meal.image})`}}>

                            </div>
                            <div style={{textAlign:'center'}}>
                                <h3>{meal.title}</h3>
                                {/* <p>{meal.description}</p> */}
                            </div>
                        </Col>
                    ))
                }
                </Row>
                <div>
                    <Marquee>
                    {
                        meals.slice(12,meals.length).map((meal,index)=>(
                           <div key={index} style={{marginRight:"24px"}}>
                                <div style={{...Style.content, backgroundImage:`url(${meal.image})`, width:"400px"}}>

                                </div>
                            </div> 
                        ))
                    }
                </Marquee>
                </div>
                <div className="product-heading">
                <h1>And More</h1>
                <h3>
                    Visit Blossom Delight at any of our branch locations 
                    and enjoy mouth watery meals that will satisfy your cravings
                </h3>
                </div>
               
            </div>
        </section>
    )
}