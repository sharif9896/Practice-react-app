import Fooitems from "./Fooditems";

const Fooditemcontainer = ({ listitem }) => {
    function change(event){
 
    }
  return (
    <>
   
        <Fooitems item={listitem} clickmetobuy={function(){alert("The Buy Button is Clicked")}}></Fooitems>
        {/* <Fooitems item={listitem} clickmetobuy={function change(event){alert(event.target.value)}}></Fooitems> */}
        
    </>
  );
};
export default Fooditemcontainer;
