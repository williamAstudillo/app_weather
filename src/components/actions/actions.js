import axios from 'axios'
export function getCities(ciudad) {
    return function (dispatch) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=4ae2636d8dfbdc3044bede63951a019b`)
            .then(json => {
                console.log(json.data)
                dispatch({ 
                    type: 'GET_CITIES',
                    payload: json.data 
                });
            });
    };
};
export function deleteCities(ciudad) {
    return {
        type: 'DELETE_CITIES',
        ciudad
    };
};