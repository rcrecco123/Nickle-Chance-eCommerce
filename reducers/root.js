import { ADD_ITEM } from "../actions/cart";

const initialState = {
    items: [{
        name: "dress",
    },
    {
        name: "dress2",
    }]

}

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            items: state.items.push(action.item)
        })
    }

    return state;
}

export default rootReducer