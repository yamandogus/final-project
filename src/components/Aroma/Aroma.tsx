

interface AromaProps  {
     aroma: string;
     color: string;  
}


const Aroma = ({ aroma, color}:AromaProps) => {
  return (
    <div className="checkbox-container">
      <div className="checkbox-div">
        <label className="checkbox-label">
          {aroma}
          <span
            style={{ backgroundColor:color, width:30, height: 35}}
          ></span>
          <input type="checkbox" className="checkbox-input" />
          <span className="custom-checkbox"></span>
        </label>
      </div>
    </div>
  );
};

export default Aroma;
