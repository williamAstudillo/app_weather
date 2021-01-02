import React, { useState } from "react";
import { connect } from "react-redux";
import {getCities}  from './actions/actions'
import'./SearchBar.css'

function SearchBar(props) {
  const [city, setCity] = useState("")
  return (
    <form id="form" onSubmit={(e) => {
      e.preventDefault();
      props.getCities(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
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