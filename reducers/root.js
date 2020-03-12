import ADD_ITEM from "../actions/cart";

const initialState = {
    cart: {
        items: [{
            name: "dress",
            price: 29.99
        }],
        itemCount: 2
    }
}

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            cart: state.cart.items.push(action.item)
        })
    }

    return state;
}

export default rootReducer