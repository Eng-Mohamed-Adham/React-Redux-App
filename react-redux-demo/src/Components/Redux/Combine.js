import { combineReducers } from "redux"

import cakeReducer from "./cakes/cakeReducer"
import CoffeeRecucer from "./Coffee/CoffeeReducer";
import IccreamReducer from "./iccream/IccreamReducer"







 const rootReucer = combineReducers({
    cake: cakeReducer,
    iccream:IccreamReducer,
    coffee:CoffeeRecucer
})
export  default rootReucer;