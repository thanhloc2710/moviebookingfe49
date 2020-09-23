import React, { useState } from 'react'

export default function Login(props) {

    // this.state = {
    //    userLogin:{
    //         userName: '',
    //         passWord: ''
    //        }
    //    }

    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         passWord: ''
    //     }
    // });

    const [userLogin, setUserLogin] = useState({
        userName: '',
        passWord: ''
    });

    console.log(userLogin);

    const handleChange = (e) => {
        const { value, name } = e.target;

        // const newUserLogin = {
        //     [name]: value
        // }

        // setState({
        //     userLogin: { ...state.userLogin, [name]: value },
        // })

        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault(); // Ngăn sự kiện sau khi submid reload lại trang
        // kiểm tra userName, passWord = cybersoft hay không => chuyển về trang chủ ngược lại báo lỗi 
        if(userLogin.userName === 'cybersoft' && userLogin.passWord === 'cybersoft'){
            // props.history.goBack(); // goBack chuyển hướng trang trước link đến trang này

            props.history.push('/home'); // chuyển hướng đến trang (path) chỉ định => home

            // props.history.replace('/home'); // thay đổi thành route tương ứng
        }else{
            alert('Login fail !')
        }
    }


    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>userName: </p>
                <input name="userName" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>passWord: </p>
                <input name="passWord" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submid">Login</button>
            </div>
        </form>
    )
}
