import axios from 'axios'
import { DOMAIN, TOKEN, USER_LOGIN } from '../../pages/ultity/ConfigWed'


export const dangNhapApiAction = (userLogin) =>{
    return async dispatch =>{
        try
        {
            let {data, status} = await axios({
                url:DOMAIN + '/api/quanlynguoidung/dangnhap',
                method: 'post',
                data:{
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.passWord
                }
            });
            console.log(data)
            if(status === 200){
                // sau khi gọi api => dispatch lên redux 
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin:data
                })
            }
            //Lưu vào localStorage
            localStorage.setItem(USER_LOGIN,JSON.stringify(data));
            localStorage.setItem(TOKEN, data.accessToken);
        }catch(err){
            console.log(err.response.data);
        }
    }
}