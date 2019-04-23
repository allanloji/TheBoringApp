
import { ajax } from 'rxjs/ajax';
import {fetchActivity, fetchActivityFailure, fetchActivitySuccess} from "../redux/modules/activity";
import {ofType} from "redux-observable";
import {mergeMap, switchMap, map} from "rxjs/operators";


const FETCH_ACTIVITY = "FETCH_ACTIVITY";


const url = 'http://www.boredapi.com/api/activity/';


export const fetchActivityEpic = action$ =>
    action$.pipe(
    ofType(FETCH_ACTIVITY),
        mergeMap(action =>
            ajax.getJSON(`http://www.boredapi.com/api/activity?${action.filters}`).pipe(
                map(response => fetchActivitySuccess(response))
        )
    )
);

