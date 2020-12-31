import React from 'react';
import { connect } from "react-redux";


 function Ciudad(props) {
    const id = props.match.params.id
    const ciudad=props.ciudades.find(ciudad=>ciudad.id == id)
    
    if(!ciudad) return <h1>No hay ciudad</h1>
  return (
      <div className="ciudad">
              <div className="container">
                <h2>{ciudad.name}</h2>
                <span>Latitud: {ciudad.coord.lat}</span><br/>
                <span>Longitud: {ciudad.coord.lon}</span>
          </div>
      </div>
  )
};


// class Ciudad extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ciudad: {}
//         }
//     }

//     // componentDidMount() {
//     //     const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
//     //     const id = this.props.match.params.id;
//     //     fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`)
//     //         .then(r => r.json())
//     //         .then((recurso) => {
//     //             console.log(recurso)
//     //             this.setState({
//     //                 ciudad: recurso
//     //             })
//     //         })
//     // }

//     // render() {
//     //     const city = this.state.ciudad;
//     //     if (!city.main) return <h1>Cargando...</h1>
//     //     return (
//     //         <div className="ciudad">
//     //             <div className="container">
//     //                 <h2>{city.name}</h2>
//     //                 <div className="info">
//     //                     <div>Temperatura: {city.main.temp} ºC</div>
//     //                     <div>Clima: {city.weather[0].main}</div>
//     //                     <div>Viento: {city.wind.speed} km/h</div>
//     //                     <div>Cantidad de nubes: {city.clouds.all}</div>
//     //                     <div>Latitud: {city.coord.lat}º</div>
//     //                     <div>Longitud: {city.coord.lon}º</div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     )
//     // }
// }
function mapStateToProps(state) {
    return {
        ciudades: state.ciudades
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ciudad);
