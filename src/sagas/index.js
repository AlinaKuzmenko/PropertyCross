import { put } from 'redux-saga/effects';
// API
import API from '../api';

export function* getListings(query) {
    const result = yield API.getListings(query);

    if(result.error) {
        yield put(
            {
                type: "GET_LISTINGS_FAILED",
                error: result.error,s
            }
        )
    }

    yield put(
        {
            type: "GET_LISTINGS_SUCCEEDED",
            listings: result,
        });
}

export default function* rootSaga() {
    getListings();
}
