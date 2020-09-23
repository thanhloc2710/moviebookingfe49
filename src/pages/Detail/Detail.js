import React from 'react'

export default function Detail(props) {
    console.log(props.match)
    return (
        <div>
            id : {props.match.params.id}
        </div>
    )
}
