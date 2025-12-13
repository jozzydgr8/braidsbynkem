import { serviceData } from "../../../Shared/data"

export const Service = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2 className="heading">
                    Service
                </h2>
                <div className="row">
                    {
                        serviceData.map((data,index)=>(
                            <div key={index} className="col-md-4">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}