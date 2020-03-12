import { ADD_ITEM } from "../actions/cart";

const initialState = {
    items: [{
        name: "dress",
        price: 29.99
    }]

}

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            cart: state.items.push(action.item)
        })
    }

    return state;
}

export default rootReducer