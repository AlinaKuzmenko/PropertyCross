import { actionTypes } from './actionTypes';

export function getListings(list) {
    return {
        type: actionTypes.GET_LISTINGS,
        list,
    }
}

export function selectListing(id) {
    return {
        type: actionTypes.SELECT_LISTING,
        id,
    }
}

export function addToFavourites(id) {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        id,
    }
}

export function removeFromFavourites(id) {
    return {
        type: actionTypes.REMOVE_FROM_FAVOURITES,
        id,
    }
}
