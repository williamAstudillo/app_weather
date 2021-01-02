
const initialState = {
    ciudades: [],
}
function rootReducer(state = initialState, action) {
    if (action.type === 'GET_CITIES') {
        var aux= action.payload.name
        if(!aux){
           return  alert('La ciudad no existe')

        }
        if (state.ciudades.find(x=>x.name ===action.payload.name  )) {
            alert('Ya tienes esta ciudad')
        }else{
            return {
                ...state,
                ciudades: [...state.ciudades,action.payload],
            };
        }
    }
    if (action.type === 'DELETE_CITIES') {
            return {
                ...state,
                ciudades: state.ciudades.filter(x=>x.name !== action.ciudad),
            };
        
    }
    return state;
}

export default rootReducer;