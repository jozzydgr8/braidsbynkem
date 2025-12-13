import braidBackground from '../../../assets/braids-background.jpg';


const backgroundStyle={color:'white',backgroundImage:`url(${braidBackground})`, backgroundSize:'cover', backgroundPosition:"center center",height:"80vh"}
export const Header = ()=>{
    return(
        <section style={{...backgroundStyle, textAlign:'center',display:"flex",alignItems:"center"}}>
            <div className="container-fluid">
                <h1>Beautiful, Long-Lasting Braids Crafted with Care</h1>
                <p>From knotless to cornrows, we create stunning, protective styles that last and look amazing.</p>
            </div>
        </section>
    )
}