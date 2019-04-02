import { actionTypes } from './actionTypes';

export function onFetchListings(loading) {
    return {
        type: actionTypes.GET_LISTINGS,
        loading,
    }
}

export function onFetchListingsSuccess(list) {
    return {
        type: actionTypes.GET_LISTINGS_SUCCEEDED,
        list,
    }
}

export function onFetchListingsFail(error) {
    return {
        type: actionTypes.GET_LISTINGS_FAILED,
        error,
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
