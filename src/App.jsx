import { useState } from "react";
import Errormessage from "./components/Errormessage";
import Fooditemcontainer from "./components/Fooditemcontainer";
import Healthyappname from "./components/Healthyappname";
import Inputfield from "./components/Inputfield";

function App() {
  // let foodiitem=["Ghee","Sabzi","Aalu","Veg Foods","Rice","Chapatti","Rotti"]

  let [foodiitem, secval] = useState([]);

  // let [curr1,secva] = useState("Food Item is Entered By User")
  // let Texttoshow = curr1;
  // let setsecval = secva;
  // secva= secva[1];

  const clickmetobuys = (event) => {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      const cval = event.target.value;
      event.target.value = "";
      let newitem = [...foodiitem, cval];
      secval(newitem);
    }
  };
  return (
    <>
      <div className="combact">
        <div className="container">
          <Healthyappname></Healthyappname>
          {/* <p className="motu">{Texttoshow}</p> */}
          <Inputfield show={clickmetobuys}></Inputfield>
          <Errormessage arr={foodiitem}></Errormessage>
          <Fooditemcontainer listitem={foodiitem}></Fooditemcontainer>
        </div>
      </div>
    </>
  );
}

export default App;
