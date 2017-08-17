import axios from "axios";

export function setLatAndLng(lat, lng){
    return {
        type: "SET_LAT_AND_LNG",
        lat,
        lng
    }
}

export function loadMarkers() {
    return (dispatch) => {
        return axios.get("http://beermapping.com/webservice/loccity/a6c6c13db7ad9e4820377979d00eb4ba/salt Lake&s=json").then((response) => {
            
            for(let i = 0; i < response.data.length; i++){
                dispatch(loadLatLong(response.data[i]))
            }
        }).catch((err) => {
            throw err;
        });
    }
}


export function loadLatLong(bar){
    let address = `${bar.street} ${bar.state}`;
    let addressFormatted = address.split(" ").join("+")
    return (dispatch) => {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressFormatted}&key=AIzaSyAaqjv6p7oEZJeFfS9Cc-7nJEezklyQJBI`).then((response) => {
            
            let ourBar = {
                label: bar.name,
                description: `Bar is located at ${bar.street} ${bar.city} ${bar.state} phone number ${bar.phone}`,
                position: {
                    lat: response.data.results[0].geometry.location.lat,
                    lng: response.data.results[0].geometry.location.lng
                },
                defaultAnimation: 2,
            }
            
            dispatch(addMarker(ourBar))
        }).catch((err) => {
            throw err;
        })
    }
}


export function addMarker(bar){
    return{
        type: "ADD_BAR",
        bar
    }
}

export function loadData(category){
    return(dispatch) => {
        return axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`).then((response) => {
            dispatch(setData(response.data.drinks))
        }).catch((error) => {
            throw error;
        })
    }
}

export function loadDrink(name){
    return(dispatch) => {
        return axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((response) => {
            dispatch(setData(response.data.drinks))
        }).catch((error) => {
            throw error;
        })
    }
}

export function loadCategories(){
    return(dispatch) => {
        return axios.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then((response) => {
            dispatch(setList(response.data.drinks))

        }).catch((error) => {
            throw error;
        })
    }
}




export function setData(data){
    return{
        type: "SET_DATA",
        data
    }
}

export function setDrink(data){
    return{
        type: "SET_DRINK",
        data
    }
}

export function setList(data){
    return{
        type: "SET_LIST",
        data
    }
}

export function addItemToCart(data){
    return{
        type: "ADD_CART",
        data
    }
}

export function removeItem(index){
    return{
        type: "REMOVE_ITEM",
        index
    }
}
