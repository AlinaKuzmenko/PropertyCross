import { actionTypes as actions } from '../actions/actionTypes';

const initialState = {
    favourites: [],
    listings: [],
    loading: false,
    notification: null,
    selectedListing: null,
};

export default function listingsReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_LISTINGS:
            return Object.assign({}, state, {
                loading: action.loading,
            });
        case actions.GET_LISTINGS_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                listings: action.list,
            });
        case actions.GET_LISTINGS_FAILED:
            return Object.assign({}, state, {
                loading: false,
                notification: action.error,
            });

        case actions.SELECT_LISTING:
            return Object.assign({}, state, {
                selectedListing: action.id,
            });

        case actions.ADD_TO_FAVOURITES:
            return Object.assign({}, state, {
                favourites: [ ...state.favourites, action.id ],
            });

        case actions.REMOVE_FROM_FAVOURITES:
            return Object.assign({}, state, {
                favourites: state.favourites.filter(el => el !== action.id),
            });

        default:
            return state;
    }
}
