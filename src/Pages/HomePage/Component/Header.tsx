import braidBackground from '../../../assets/braids-background.jpg';


const backgroundStyle={backgroundImage:`url(${braidBackground})`, backgroundSize:'cover', backgroundPosition:"center center",minHeight:"80vh"}
export const Header = ()=>{
    return(
        <section style={backgroundStyle}>
            header
        </section>
    )
}