import {EnvironmentOutlined, ArrowRightOutlined} from '@ant-design/icons'
export const Footer = ()=>{
    return(
        <section style={{background:"black", color:"white"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Our Location</h3>
                        <p><EnvironmentOutlined/> Braidsbynkem</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Section</h3>
                        <p>Phone: 234 815 1435 731</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <a href='https://wa.link/ioxpj7' target='_blank' >Send us a message on whatsapp <ArrowRightOutlined/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}