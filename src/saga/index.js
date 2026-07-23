const handleMessage=(params,message)=>{
    const updatedAction={
        ...action,
        author:params.username,
    };
    params.socket.send(JSON.stringify(updatedAction));
}
export default handleMessage;