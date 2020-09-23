import React from 'react'

export default function PageNotFound(props) {
    return (
        <div>
            Không tìm thấy trang: {props.location.pathname}
            <button onClick={()=>{
                props.history.replace('/home')
            }}>Bấm vào đây để về trang chủ</button>
        </div>
    )
}
