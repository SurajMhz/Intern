function Button({message,color}){
    const paint= { color:color};
    return(
        <>
        <button style={paint}>{message}</button>
        </>
    )
}
export default Button;