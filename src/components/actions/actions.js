
export function getCities(ciudad) {
    return function (dispatch) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=4ae2636d8dfbdc3044bede63951a019b`)
            .then(response => response.json())
            .then(json => {
                dispatch({ 
                    type: 'GET_CITIES',
                    payload: json 
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