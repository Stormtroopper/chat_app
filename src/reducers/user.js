import * as types from '../constants/actionTypes';
export const users = (state = [], action) => {
    switch (action.type) {
        case types.POPULATE_USER_LIST:
            return action.users;
        default:
            return state;
    }
}