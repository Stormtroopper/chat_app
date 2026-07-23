import { message } from './message';
import { users } from './users';
import { combineReducers } from 'redux';
const index_chat = combineReducers({
    message,
    users
});
export default index_chat;