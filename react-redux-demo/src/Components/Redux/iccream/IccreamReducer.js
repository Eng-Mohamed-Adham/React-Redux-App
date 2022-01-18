import { BUY_ICCREAM } from "../ActionType";

const initialstate ={
    numOfIccream: 20
}

const IccreamReducer = (state = initialstate, action) => {
    switch(action.type){
        case BUY_ICCREAM:
            return{
                numOfIccream:state.numOfIccream > 0 ? state.numOfIccream -1 : state.numOfIccream
            }
            default: return  state
    }

}
export default IccreamReducer;