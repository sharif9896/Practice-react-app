const Errormessage =(props)=>{
    let {arr} = props;
    return (
        <>
            {arr.length === 0? <h1 className="munna">Iam Still Hungry!</h1>:null}
        </>
    );
}
export default Errormessage;