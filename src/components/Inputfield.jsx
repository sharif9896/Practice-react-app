const Inputfield = ({show}) => {
    
  return (
    <>
          <div className="fields">
            <input type="text" className="field" placeholder="Enter Your Food Here" onKeyDown={show}/>

          </div>
          
    </>
  );
};
export default Inputfield;
