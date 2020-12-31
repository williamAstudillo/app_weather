
import { GET_CITIES} from '../actions/actions.js'

const initialState = {
    ciudades: [],
}
function rootReducer(state = initialState, action) {
    if (action.type === GET_CITIES) {
        if (state.ciudades.find(x=>x.name ===action.payload.name )) {
            alert('Ya tienes esta ciudad')
        }else{
            return {
                ...state,
                ciudades: [...state.ciudades,action.payload],
            };
        }
    }
    return state;
}

export default rootReducer;