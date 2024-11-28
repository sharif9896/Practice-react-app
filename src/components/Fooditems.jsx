// import Errormessage from "./Errormessage";

const Fooitems = ({ item , clickmetobuy }) => {
  return (
    <>
      {item.map((val) => (
        <div className="con">
          <div className="cover">
            <p>{val}</p>
            <div className="btnscon">
              <button onClick={clickmetobuy}>Buy</button>
            </div>
          </div>
        </div>
        
       ))}
    </>
  );
};
export default Fooitems;
