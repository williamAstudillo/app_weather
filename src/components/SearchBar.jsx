import React, { useState ,useEffect} from "react";
import { connect } from "react-redux";
import {getCities}  from './actions/actions'
import'./SearchBar.css'

function SearchBar(props) {
  const [city, setCity] = useState("")
  useEffect(() => {
    if(!props.ciudades[0]){
      props.getCities('Bogotá');
    }
  })
  return (
    <form id="form" onSubmit={(e) => {
      e.preventDefault();
      props.getCities(city);
      setCity('');
    }}>
      <input
        id="input-text"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input id="button-input" type="submit" value="Agregar" />
    </form>
  );
}
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
)(SearchBar);