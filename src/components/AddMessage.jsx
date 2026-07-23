const AddMessage = (props) => {
    let input
    const sendMessage = (e) => {
        if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me')
            input.value = ''
        }
    }
    return (
        <>

            <section id="new-message">
                <input
                    onKeyDown={sendMessage}
                    type="text"
                    ref={(node) => {
                        input = node
                    }}
                />
            </section>
        </>
    )
}


export default AddMessage