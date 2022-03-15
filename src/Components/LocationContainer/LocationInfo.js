const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div>
        <h2 className="text">{name}</h2>
        <div className="Suburb">
          <div className="Type">
            <b>type: </b>
            {type}
          </div>
          <div className="Type">
            <b>dimension: </b>
            {dimension}
          </div>
          <div className="Type">
            <b>population: </b>
            {population}
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationInfo;