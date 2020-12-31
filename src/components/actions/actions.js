
export  const GET_CITIES ='GET_CITIES'



export default function getCities(ciudad) {
    return function (dispatch) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b`)
            .then(response => response.json())
            .then(json => {
                dispatch({ 
                    type: GET_CITIES,
                    payload: json 
                });
            });
    };
};
