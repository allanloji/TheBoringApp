import { ajax } from 'rxjs/ajax';
import {fetchActivityFailure, fetchActivitySuccess} from "../redux/modules/activity";
import {ofType} from "redux-observable";
import {mergeMap, map, catchError} from "rxjs/operators";

const FETCH_ACTIVITY = "FETCH_ACTIVITY";

export const fetchActivityEpic = action$ =>
    action$.pipe(
    ofType(FETCH_ACTIVITY),
        mergeMap(action =>
            ajax.getJSON(`http://www.boredapi.com/api/activity?${action.filters}`).pipe(
                map(response => fetchActivitySuccess(response)),
                catchError(error => fetchActivityFailure(error.xhr))
        )
    )
);

