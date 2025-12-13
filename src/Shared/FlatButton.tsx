type buttonProp = {
    title:string,
    onClick:()=>void,
}
export const FlatButton =({title, onClick}:buttonProp)=>{
    return(
        <button className="btn btn-md btn-dark" onClick={onClick}>{title}</button>
    )
}