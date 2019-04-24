import { Action } from '@ngrx/store';
import { ActionTypes } from '~/app/shared/store/actions/counter.actions';

 
const initialState = -1;
 
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;
 
    case ActionTypes.Decrement:
      return state - 1;
 
    case ActionTypes.Reset:
      return 0;
 
    default:
      return state;
  }
}