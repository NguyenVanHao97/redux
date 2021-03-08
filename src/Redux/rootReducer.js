import {combineReducers} from 'redux'
import GioHangReducer from '../Redux/GioHangReducer'
const rootReducer = combineReducers({
    stateGioHang: GioHangReducer
})

export default rootReducer;