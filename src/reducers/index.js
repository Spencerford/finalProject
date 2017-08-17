let defaultState = {
    lat: 40.7608,
    lng: -111.8910,
    markers: [],
    menu: [],
    drinks: [],
    list: [],
    cart: []
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_LAT_AND_LNG") {
        return {
            ...state,
            lat: action.lat,
            lng: action.lng
        }
    } else if (action.type === "ADD_BAR") {
        
        return {
            ...state,
            markers: [...state.markers, action.bar]
        }
    } else if (action.type === "SET_DATA") {
        return {
            ...state,
            drinks: action.data
        }
    } else if (action.type === "SET_LIST") {
        return {
            ...state,
            list: action.data
        }
    } else if (action.type === "ADD_CART") {
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].name === action.data.name) {
                let cartCopy = [...state.cart];
                cartCopy[i].amount += action.data.amount;
                return {
                    ...state,
                    cart: cartCopy
                }
            }
        }
        return {
            ...state,
            cart: [
                ...state.cart,
                action.data
            ]
        }

    } else if (action.type === "REMOVE_ITEM") {
        let cartCopy = state.cart.slice();
        cartCopy.splice(action.index, 1);
        return {
            ...state,
            cart: cartCopy
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer