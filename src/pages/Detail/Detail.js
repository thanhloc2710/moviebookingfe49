import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { layChiTietPhimAction, layDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';

export default function Detail(props) {
    // kết nối với reducer lây dữ liệu phim về thông qua hook useSelector
    const {chiTietPhim,dsPhim} = useSelector (state=>state.QuanLyPhimReducer);
    console.log(chiTietPhim);
    // ứng với this.props
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layChiTietPhimAction(props.match.params.id));
    }, [])

    return (
        <div className="container">
            <div className="col-4">
                <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
            </div>
            <div className="col-8">

            </div>
        </div>
    )
}
