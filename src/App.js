import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import FilmsManager from './pages/Admin/FilmsManager/FilmsManager';
import UserManager from './pages/Admin/UserManager/UserManager';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import DemoHOC from './pages/HOC/DemoHOC';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import TrangChu from './pages/TrangChu/TrangChu';
import { HomeTemplate } from './templates/HomeTemplate';
import {AdminTemplate} from './templates/AdminTemplate'
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" component render={(props)=>{return (<div>
          <Header {...props} />
          <Login {...props}/>
        </div>)}} /> */}
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/about" Component={About} />
        <HomeTemplate exact path="/hoc" Component={DemoHOC} />

        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <HomeTemplate exact path="/" Component={Home} />
        <Route exact path="/trangchu" component={TrangChu} />
        <AdminTemplate exact path="/admin/films" Component={FilmsManager} />
        <AdminTemplate exact path="/admin/users" Component={UserManager} />

        <Route exact path="/booking/:maLichChieu" render={(propsRoute)=>{
          return <Booking {...propsRoute} />
        }} />
        
        <Route exact path="/profile" component={Profile} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
