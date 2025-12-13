import { serviceData } from "../../../Shared/data"
import { FlatButton } from "../../../Shared/FlatButton"
import { handleRequest } from "../../../Shared/handleRequest"

export const Service = ()=>{
    return(
        <section id="service">
            <div className="container-fluid">
                <h2 className="heading">
                    Service
                </h2>
          
                <div className="row">
                    {
                        serviceData.map((data,index)=>(
                            <div key={index} className="col-md-4" >
                                <div style={{display:"flex", alignItems:'center', flexDirection:"column", width:"100%", height:"400px", margin:"10px 0"}} >
                                    <div style={{backgroundImage:`url(${data.image})`, backgroundSize:'cover', backgroundPosition:'center center', width:'100%', height:'300px', backgroundRepeat:'no-repeat'}}></div>
                                    <div>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                     <FlatButton title={`₦${JSON.stringify(data.price)}-Get Started`} onClick={()=>handleRequest(data.message)}/>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                    
                    
                </div>
                <br/>
                <h2>Custom or additional hair designs may require an extra fee. Wash, blow, and set is offered at ₦5,000.</h2>
            </div>
        </section>
    )
}