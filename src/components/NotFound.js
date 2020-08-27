import React from 'react'

export default function NotFound(props) {
    const goBack = () => {
        props.history.go(-1)
    } 
    return (
        <div>
            <h1>Not Found</h1>
            <button onClick={goBack}>
            Go Back
            </button>
        </div>
    )
}
