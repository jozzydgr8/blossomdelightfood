import { Col, Row } from "antd"
import { meals } from "../../shared/data"

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
                    meals.map((meal,index)=>(
                        <Col lg={6} md={8} sm={24} xs={24} key={index}>
                            <div style={{...Style.content, backgroundImage:`url(${meal.image})`}}>

                            </div>
                            <div style={{textAlign:'center'}}>
                                <h3>{meal.title}</h3>
                                <p>{meal.description}</p>
                            </div>
                        </Col>
                    ))
                }
                </Row>
               
            </div>
        </section>
    )
}