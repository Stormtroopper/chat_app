import * as types from '../constant/ActionTypes';
let mId=0;
const nextUserId=0;
export const addMessage=(message,author)=>({
        type:types.ADD_MESSAGE,
            id:mId++,
            message,
            author
})
export const messageReceived=(message,author)=>({
        type:types.MESSAGE_RECEIVED,
        id:nextUserId++,
        message,
        author
});
export const populateUserList=users=>({
type:types.POPULATE_USER_LIST,
users
})
