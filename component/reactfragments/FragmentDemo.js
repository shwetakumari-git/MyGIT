import React from 'react'
function Resort() {
    return <h1>i m a resort</h1>
}
function Lake() {
    return <h1>lake</h1>
}
function FragmentDemo(){
    return(
        <>
        <Lake/>
        <Resort/>
        </>
    )
}
export default FragmentDemo