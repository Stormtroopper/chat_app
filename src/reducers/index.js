import { message } from './message.js';
import { users } from './user.js'
import { combineReducers } from 'redux';
const index_chat = combineReducers({
    message,
    users
});
export default index_chat;