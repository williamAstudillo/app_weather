import React from 'react';
import './Card.css';
import { connect } from "react-redux";
import  getCities  from '../components/actions/actions'
import { Link, Route } from 'react-router-dom';


 function Card(props) {
  
  return (
    <div className="card">
      {props.ciudades && props.ciudades.map((ciudad)=>
      <div>
      <div id="closeIcon" className="row">
        {/* <button onClick={onClose} className="btn btn-sm btn-danger">X</button> */}
      </div>
      <div className="card-body">
            <Link to={`/ciudad/${ciudad.id}`} >
          <h5 className="card-title">{ciudad.name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{ciudad.main.temp_min}°</p>
            
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            {ciudad.main.temp_max}
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" width="80" height="80" src={`http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png`} alt="" />
          </div>
        </div>
      </div>
      </div>
      )}

    </div>
  );
};
function mapStateToProps(state) {
  return {
    ciudades: state.ciudades
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCities: ciudad => dispatch(getCities(ciudad)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);