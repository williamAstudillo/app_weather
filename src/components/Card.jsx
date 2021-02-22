import React from 'react';
import './Card.css';
import { connect } from "react-redux";
import { deleteCities}  from '../components/actions/actions'
import { Link} from 'react-router-dom';


function Card({ deleteCities,ciudades}) {
  const onClose=(e)=>{
    deleteCities(e.target.name)
  }
    return (
    <div className="card">
      {ciudades[0] && ciudades.map((ciudad,i)=>
      <div key={i} id="container">
    
      <div id="closeIcon" className="row">
        {i ===0 ? null:<button name= {ciudad.name}onClick={onClose} className="button">X</button>}
      </div>      <div className="card-body">
            {/* <Link to={`/ciudad/${ciudad.id}`} > */}
          <h5 className="card-title">{ciudad.name}</h5>
        {/* </Link> */}
        <div className="row">
          <div className="temp-min">
            <p className="tituloTemp">Min</p>
            <p id="tempMin">{ciudad.main.temp_min}°</p>
          </div>
          <div className="temp-max">
            <p className="tituloTemp">Max</p>
                <p id="tempMax">{ciudad.main.temp_max}°</p>
          </div>
          <div className="icono-clima">
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
    deleteCities: ciudad => dispatch(deleteCities(ciudad)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);