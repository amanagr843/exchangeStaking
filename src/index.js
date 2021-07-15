
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './views/App';
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import Home from './views/Home';
import {isLogin} from './views/utils'
import Staking from "views/Staking";
import Deposit from "views/Deposit";
import AddLiquidity from 'views/AddLiquidity';
ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <HashRouter>
        <Switch>
        <Route path="/home" render={(props)=><Home {...props}></Home>}/>
        <Route path="/addLiquidity" render={(props)=><AddLiquidity {...props}></AddLiquidity>}/>
        <Route path="/deposit" render={(props)=><Deposit {...props}></Deposit>}/>
        <Route path="/staking" render={(props)=><Staking {...props}></Staking>}/>
        <Route path="/login" render={props=>(
            isLogin() ? 
            <AdminLayout {...props}/>
            :
            <App {...props}></App>
          )}/>
          <Route path="/signin" render={(props)=><App {...props}></App>}/>
          <Redirect from="/login"  to="/admin/dashboard" />
        </Switch>
      </HashRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
