function CommentsPage(){

    const fetchComments = async () =>{
        const response = await fetch('/api/comments')
    }

    return(
        <>
            <button onClick={fetchComments}>Load Comments</button>
        </>
    )
}

export default CommentsPage