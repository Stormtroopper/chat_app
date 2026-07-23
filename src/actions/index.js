import * as types from '../constant/ActionTypes.js';
let mId=0;
const nextUserId=0;
export const addMessage=(message,author)=>({
        type:types.ADD_MESSAGE,
            id:mId+1,
            message,
            author
})
export const messageReceived=(message,author)=>({
        type:types.MESSAGE_RECEIVED,
        id:nextUserId+1,
        message,
        author
});
export const populateUserList=users=>({
type:types.POPULATE_USER_LIST,
users
})
