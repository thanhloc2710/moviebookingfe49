import React, { useState } from 'react'
import axios from 'axios' // thư viện kết nối BE api

export default function Home(props) {

    const [dsPhim, setDSPhim] = useState([]);

    const getFilm = () => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        }).then(res => {
            console.log('kết quả ', res.data);
            // Set lại state dsPhim => function render lại ( chạy lại tất cả với dsPhim mang giá trị mới )
            setDSPhim(res.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e)=>{
                    e.target.src = 'http://picsum.photos/300/300'
                }} />
                <div className="card-body">
                    <h4 className="card-title">{phim.tenPhim}</h4>
                    <p className="card-text">{phim.moTa}</p>
                </div>
            </div>
            </div>  
        })
    }

    return (
        <div className="container">
            <button onClick={() => {
                getFilm();
            }}>Lấy danh sách phim</button>
            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
