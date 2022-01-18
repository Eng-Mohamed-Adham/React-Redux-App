import { BUY_COFFEE,  } from "../ActionType";

const initialState = {
    numOfCoffee: 30
}

const CoffeeRecucer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COFFEE:
            return{
                numOfCoffee: state.numOfCoffee > 0 ? state.numOfCoffee -1 : state.numOfCoffee
            }
            default: return state
        }
}
export default CoffeeRecucer;

