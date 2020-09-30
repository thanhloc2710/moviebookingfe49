import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';

const HomeLayout = (props) => {
    return <Fragment>
        <Header />
        {props.children}
    </Fragment>
}

// export const HomeTemplate = ({ Component, ...props }) => {
//     return <Route {...props} render={(propsRoute) => {
//         return <HomeLayout>
//             <Component {...propsRoute} />
//         </HomeLayout>
//     }} />
// }

// export const HomeTemplate = (props) => {
//     let {exact,path,Component} = props;

//     return <Route exact path={path} render={(propsRoute) => {
//         return <HomeLayout>
//             <Component {...propsRoute} />
//         </HomeLayout>
//     }} />
// }

// export const HomeTemplate = ({Component,...restProps}) => {
//     return <Route {...restProps} render={(propsRoute) => {
//         return <Fragment>
//             <Header />
//             <Component {...propsRoute} />
//         </Fragment>
//     }} />
// }

export const HomeTemplate = ({Component,...restProps}) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute} />
        </Fragment>
    }} />
}