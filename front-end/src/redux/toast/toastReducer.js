// initial state
const initialState = {
    message : "",
    type : "error",
    load : false
}

const toastReducer = (state = initialState, action) => {

    switch(action.type){

        case action.type:
            return "";

        default:
            return state;

    }

}

export default toastReducer;
