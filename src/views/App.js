import React from 'react';
import './App.scss';
import swal from 'sweetalert'
import axios from 'axios';
import logo from './FInalCryptologo.png'
import {Row,Col} from 'reactstrap'
import {TextField} from '@material-ui/core'
import { Text } from 'react-native';
import Btc from 'cryptocurrency-icons/svg/icon/btc.svg';
import Eth from 'cryptocurrency-icons/svg/icon/eth.svg';
import Bnb from 'cryptocurrency-icons/svg/icon/bnb.svg';
import Doge from 'cryptocurrency-icons/svg/icon/doge.svg'
export default class Login extends React.Component{
    state = {
        login: true,
        signUpForm: {
            username: "",
            email: "",
            password: ""
        },
        signInForm: {
            email: "",
            password: ""
        },
        live_bit : 0,
        live_bnb : 0,
        live_eth : 0,
        liv_ant : 0
    };
getlive = async () =>{
    const l_1 = await axios({
        method:'get',
        url : `https://api.anteagle.tech/liveprice?pair=ANTEAG/USDT`
      })
      const l_2 = await axios({
        method:'get',
        url : `https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      })
      const l_3 = await axios({
        method:'get',
        url : `https://api.anteagle.tech/liveprice?pair=BNB/USDT`
      })
      const l_4 = await axios({
        method:'get',
        url : `https://api.anteagle.tech/liveprice?pair=ETH/USDT`
      })
    //   this.setState({live_bit:l_2.data[0].price})
      this.setState({live_ant:l_1.data[0].price})
    //   this.setState({live_eth:l_4.data[0].price})
    //   this.setState({live_bnb:l_3.data[0].price})
}
componentDidMount(){
    setInterval(()=>{
        this.getlive()
    },1000)

}
    render() {
        return (
            <div className="login">
                <div className={`login__colored-container ${this.state.login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
                <div className={`login__welcome-back ${this.state.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                    <div className="login__welcome-back__logo-container">
                        <img className="login__welcome-back__logo-container--image" style={{background:"white",borderRadius:"100px"}} src={logo} alt="ANTEAGLE" />
                        ANTEAGLE    
                    </div>
                    <div className="login__welcome-back__main-container">
                        <div className="login__welcome-back__main-container__text-container">
                            <span className="login__welcome-back__main-container__text-container--title">
                                Welcome Back!
                            </span>
                            <span className="login__welcome-back__main-container__text-container--secondary">
                                Earning must go on, please log in.
                            </span>
                        </div>
                        <div onClick={() => {
                            this.setState({
                                login: !this.state.login
                            });
                        }} className="login__welcome-back__main-container__button-container">
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={`login__create-container ${this.state.login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                    Create Account
                    <div className="login__create-container__social-container">
                        {/* <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="" /> */}
                        {/* <img className="login__create-container__social-container--google-icon" src={google} alt="" /> */}
                        {/* <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="" /> */}
                    </div>
                    <span className="login__create-container--info-text">Use email for your registration</span>
                    <div className="login__create-container__form-container">
                        <form className="login__create-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            this.signUp();
                        }}>
                            <input
                                className="login__create-container__form-container__form--name"
                                type="text"
                                placeholder="username"
                                value={this.state.signUpForm.name}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        username: value.target.value,
                                        email: this.state.signUpForm.email,
                                        password: this.state.signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={this.state.signUpForm.email}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        email: value.target.value,
                                        username: this.state.signUpForm.username,
                                        password: this.state.signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={this.state.signUpForm.password}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        password: value.target.value,
                                        username: this.state.signUpForm.username,
                                        email: this.state.signUpForm.email
                                    }
                                })}
                                required />
                            <button
                                className="login__create-container__form-container__form--submit">
                                Sign Up
                            </button>
                         <Row style={{marginBottom:"-2rem",marginTop:"2rem"}}>
                             <Col>
                                <img src={Btc}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{" "}BTC {"    "}</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{"    "}$ {this.state.live_bit}</Text>
                             </Col>
                             <Col>
                             <img src={Eth}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{" "}ETH{"    "}</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{"    "}$ {this.state.live_eth}</Text>
                             </Col>
                             {/* </Row>
                        <Row style={{alignContent:"center"}}> */}
                             <Col>
                             <img src={Bnb}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{" "}BNB </Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{"    "}$ {this.state.live_bnb}</Text>
                            </Col>

                            <Col>
                            <img src={logo} style={{background:"white",borderRadius:"100px",height:"2rem"}}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{" "}ANTEAG</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.7rem"}}>{"    "}$ {this.state.live_ant}</Text>
                            </Col>
                         </Row>
                            
                        </form>
                    </div>
                </div>
                <div className={`login__login-container ${!this.state.login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                    <div className="login__login-container__logo-container" >
                        <img className="login__login-container__logo-container--image" src={logo} style={{background:"white",borderRadius:"100px"}} alt="ANTEAGLE" />
                        ANTEAGLE
                    </div>
                    <div className="login__login-container__main-container">
                        <div className="login__login-container__main-container__social-container">
                            {/* <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                            <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                            <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" /> */}
                        </div>
                        <span className="login__create-container--info-text" style={{marginLeft:"-20rem"}}>Use email for your login</span>
                        <div className="login__create-container__form-container__form">
                            <form className="login__create-container__form-container__form__form" onSubmit={(e) => {
                                e.preventDefault();
                                this.signIn();
                            }}>
                                <input
                                    className="login__create-container__form-container__form--name"
                                    type="name"
                                    placeholder="Email"
                                    value={this.state.signInForm.email}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            email: value.target.value,
                                            password: this.state.signInForm.password
                                        }
                                    })}
                                    required />
                                <input
                                    className="login__create-container__form-container__form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.signInForm.password}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            password: value.target.value,
                                            email: this.state.signInForm.email
                                        }
                                    })}
                                    required />
                                <button
                                    className="login__create-container__form-container__form--submit">
                                    Sign In
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`login__hello-container ${!this.state.login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Hello, stranger!
                            </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            Enter your personal details and start your own portfolio!
                        </span>
                    </div>
                    <div onClick={() => {
                        this.setState({
                            login: !this.state.login
                        });
                    }} className="login__welcome-back__main-container__button-container">
                        Sign Up
                    </div>
                </div>
            </div>
        );
    }

    signUp() {
      axios({
        url : `https://api.anteagle.tech/register?username=${this.state.signUpForm.username}&password=${this.state.signUpForm.password}&email=${this.state.signUpForm.password}&telegram=${this.state.signUpForm.telegram}`,
        headers:{
          'Accept' : "application/json"
        },
        method : "post",

      }).then(res=>{
        if(res.data.success){
          swal("Registered Successfully","Sigin First","success")
          
        }
        else{
          swal("Error","Some Error Occured","error")
        }
      })
        
    }

    signIn() {
        
       

        axios({
          url : `https://api.anteagle.tech/login?username=${this.state.signInForm.email}&password=${this.state.signInForm.password}`,
          headers:{
            'Accept' : "aaplication/json"
          },
          method : "post"
        }).then(res=>{
          if(res.data.success){
            swal("Login Successfull","Proceeding to Home Page","success")
            localStorage.setItem("jwt","test")
            localStorage.setItem("BTC_Coins",res.data.BTC_Coins)
            localStorage.setItem("ETH_Coins",res.data.ETH_Coins)
            localStorage.setItem("BNB_Coins",res.data.BNB_Coins)
            localStorage.setItem("ANTEAG_Coins",res.data.ANT_Coins)
            localStorage.setItem("USDT_Coins",res.data.USDT_Coins)
            localStorage.setItem("INRD_Coins",res.data.INRD_Coins)
            localStorage.setItem("userid",res.data.userid)
            window.location = "/"
          }
          else{
            swal("Error","Invalid username or Password please try agin","error")
          }
        })
        this.setState({
          signInForm: {
              password: "",
              email: ""
          }
      });
    }
}



