import axios from 'axios';
import { LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM } from '../constants/QuanLyPhimConstant'
// Action có 2 loại :
//+ Action bình thường 


// +Action async (các action để gọi api)

// export const layDanhSachPhimAction = () => {
//     // thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
//     return dispatch => {
//         axios({
//             url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//             method: 'GET'
//         }).then(res => {
//             console.log('kết quả ', res.data);
//             // lần 1 tại component để gọi action này thực thi 
//             // lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer 
//             const action = {
//                 type : LAY_DANH_SACH_PHIM,
//                 dsPhim: res.data
//             }
//             dispatch(action);
//         }).catch(err => {
//             console.log(err.response.data);
//         })
//     }
// }

export const layDanhSachPhimAction = () => {
    // thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
        const { data } = await axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        // sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer 
        const action = {
            type: LAY_DANH_SACH_PHIM,
            dsPhim: data
        }
        dispatch(action);
    }
}

export const layChiTietPhimAction = (maPhim) => {
    // thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
        const { data } = await axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        // sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer 
        const action = {
            type: LAY_CHI_TIET_PHIM,
            chiTietPhim: data,
        }
        console.log(data)
        dispatch(action);
    }
}