import React, { useEffect, useState } from 'react'
import axios from 'axios' // thư viện kết nối BE api
import { connect,  useSelector,useDispatch } from 'react-redux';
import {layDanhSachPhimAction} from '../../redux/action/QuanLyPhimAction'
import { NavLink } from 'react-router-dom';

function Home(props) {

    // dùng useSelector thay cho mapStateToProps lấy danh sách phim từ reducer về 
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    // useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch();

    const [dsPhim, setDSPhim] = useState([]);

    const getFilm = () => {
        dispatch(layDanhSachPhimAction());
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then(res => {
        //     console.log('kết quả ', res.data);
        //     // Set lại state dsPhim => function render lại ( chạy lại tất cả với dsPhim mang giá trị mới )
        //     setDSPhim(res.data);
        // }).catch(err => {
        //     console.log(err.response.data);
        // })
        // getFilmsApi()
    }

    // useEffect(()=>{
    //     axios({
    //         url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //         method: 'GET'
    //     }).then(res => {
    //         console.log('kết quả ', res.data);
    //         // Set lại state dsPhim => function render lại ( chạy lại tất cả với dsPhim mang giá trị mới )
    //         setDSPhim(res.data);
    //     }).catch(err => {
    //         console.log(err.response.data);
    //     })
    // },[]) // tham số thứ 2 useEffect là mảng rổng => ứng với componentDidMount của reacr LifeCycle

    // const getFilmsApi = async () => { // async function là function bất đồng bộ khi gọi nó, các hàm tiếp vẫn tiếp tục thực hiện
    //     try {
    //         let { data, status } = await axios({
    //             url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //             method: 'GET'
    //         });

    //         // lệnh await bắt buộc các lệnh phía sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
    //         // console.log(promise);
    //         // console.log(100/0);

    //         if (status === 200) {
    //             setDSPhim(data);
    //         }
            
    //     } catch(ex) {
    //         console.log(ex);
    //         // chỉ cân bên trong xử lý try xảy ra lỗi => không làm nửa mà làm catch
    //     }
    // }




    const renderPhim = () => {
        return props.dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => {
                        e.target.src = 'http://picsum.photos/300/300'
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>

                        <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}> ĐẶT VÉ </NavLink>
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


// kết nối với rootReducer lấy giá trị state về component
const mapStateToProps = (state) =>{
    return {
        dsPhim: state.QuanLyPhimReducer.dsPhim
    }
}

export default connect(mapStateToProps)(Home);