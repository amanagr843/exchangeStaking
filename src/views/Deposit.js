
import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './FInalCryptologo.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bg2 from './bg4.png';
import bg3 from './bg5.jpeg';
import bg1 from './bg6.jpeg';
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';
import './styles.css';
import { useHistory } from 'react-router-dom';

// import { GlobalStyles } from "./components/login/globalStyles";
// import { lightTheme, darkTheme } from "./components/login/Themes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'white',
    height:2500,

  },
  
  
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop:20
  },
  title: {
    flexGrow: 1,
    marginTop:20,
    color:'black',

  },
  logo:{
height:30,
width:80,
paddingRight:10,
  },
wallet:{
  marginTop:15,
  marginRight:20,
  fontSize:12
},
walletm:{
  marginTop:25,
  marginRight:2,
  fontSize:12
},
cardholder:{
  marginTop:100,
},
cards:{
  width:650,
  height:250,
  backgroundColor:'#2E2E2E',
   marginLeft:400,
 fontFamily:'Orbitron',
 borderRadius:20
},
cardsHeader:{
    width:650,
    height:80,
    backgroundColor:'#2E2E2E',
       marginLeft:400,
   fontFamily:'Orbitron',
   borderRadius:20
  },
cardsm:{
  width:400,
  height:150,
  backgroundColor:'#2E2E2E',
   marginLeft:50,
 fontFamily:'Orbitron',
 color:'black',
 borderRadius:20
},
cardsmHeader:{
    width:400,
    height:100,
    backgroundColor:'#2E2E2E',
       marginLeft:50,
   fontFamily:'Orbitron',
   color:'black',
   borderRadius:20
  },
titlec: {
  fontSize: 24,
  color:'white',
paddingLeft:10,
fontFamily:'Orbitron'
},
titlecm: {
  fontSize: 15,
  color:'white',
paddingLeft:5,
fontFamily:'Orbitron'
},
pos: {
  marginBottom: 12,
},
btn:{
 left:20,
 top:30
},
btnm:{
  left:15,
  fontFamily:'Orbitron'
 },
 content:{
  left:15,
  fontFamily:'Orbitron',
  color:'white',
  fontSize:10
 },
 contentc:{
  fontFamily:'Orbitron',
  color:'white',
  fontSize:18,
  paddingLeft:10,
  paddingRight:20
 },
 header:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:22,
    paddingLeft:5
   },
   headerc:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:32,
    paddingLeft:400,
    marginTop:-20
},
headerc2:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:32,
    paddingLeft:250,
    marginTop:-20
},
   column:{
       top:20
   }
}));
const initialPositionValue = "fixed";

export default function Deposit() {
  const classes = useStyles();
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const darkMode = useDarkMode(false);
  let history = useHistory();

  const redirect = () => {
    history.push('/addLiquidity')
  }
  const handleWindowSizeChange = () => {
      setwidth(window.innerWidth)
    };
    useEffect(()=>{
      window.addEventListener('resize', handleWindowSizeChange());
    })
    const isMobile = width <= 900;
    const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
if (isMobile) {
  return(
<div className="root">
      <AppBar position="static" className="appbarm">
        <Toolbar>
          <div className={classes.logo}>
          <img src={logo} alt="logo"/>
          </div>
          <Typography variant="h6" className={classes.title}>
            AntEagle
          </Typography>
          <Button variant="outline-danger" className={classes.walletm}>Connect to a Wallet</Button>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Page/> */}
        </Toolbar>
      </AppBar>
<div className={classes.cardholder}>
      <Card className={classes.cardsmHeader} variant="outlined">
      <CardContent>
        <Typography className={classes.titlecm} color="textSecondary" gutterBottom>
        Total Deposits
        </Typography>
        <div className={classes.header}>
        
        $328,555
        </div>
      </CardContent>
      <CardActions>
       
      </CardActions>
          </Card>
          <Card className={classes.cardsmHeader} variant="outlined">
      <CardContent>
        <Typography className={classes.titlecm} color="textSecondary" gutterBottom>
        Pool Rate
        </Typography>
        <div className={classes.header}>
        
        10,500 DFYN / week
                </div>
      </CardContent>
      <CardActions>
       
      </CardActions>
          </Card>
    <Card className={classes.cardsm} variant="outlined" expand style={{background: `url(${bg3})`}}>
      <CardContent>
        <div className={classes.content}>
        Step 1. Get DFYN Liquidity tokens
DFYN LP tokens are required. Once you've added liquidity to the DFYN-BIFI pool you can stake your liquidity tokens on this page.
        </div>
        <Typography>
        <Button className={classes.btnm} onClick={redirect}>Add  AntEagle  liquidity</Button>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
<div></div>

    </div>
    </div>
      );
}
else{
  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //   <>
    //   <GlobalStyles/>
    <div className="rootd">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <div className={classes.logo}>
          <img src={logo} alt="logo"/>
          </div>
          <Typography variant="h6" className={classes.title}>
            AntEagle
          </Typography>
          
          <Button variant="outline-danger" className={classes.wallet}>Connect to a Wallet</Button>
          {/* <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <DarkModeToggle
      onChange={darkMode.toggle}
      checked={darkMode.value}
      size={80}
    />
          <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div> */}
         
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
        </Toolbar>
      </AppBar>
<div className={classes.cardholder}>


      <Card className={classes.cardsHeader} variant="outlined">
      <CardContent>
        <Typography className={classes.titlec} color="textSecondary" gutterBottom>
        Total deposits
        <div className={classes.headerc}>
        
        $328,555
        </div>
        </Typography>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
          </Card>
      <Card className={classes.cardsHeader} variant="outlined">
      <CardContent>
        <Typography className={classes.titlec} color="textSecondary" gutterBottom>
        Pool Rate
        <div className={classes.headerc2}>
        
        10,500DFYN/week
        </div>
        </Typography>
      </CardContent>
      
      <CardActions>
       
      </CardActions>
          </Card>
          
    <Card className={classes.cards} variant="outlined" expand style={{background: `url(${bg3})`}}>
      <CardContent>
      <div className={classes.contentc}>
        
      Step 1. Get DFYN Liquidity tokens
DFYN LP tokens are required. Once you've added liquidity to the DFYN-BIFI pool you can stake your liquidity tokens on this page.
        </div>        
        <Typography>
      <Button className={classes.btn} onClick={redirect}>Add AntEagle liquidity</Button>
      </Typography> 
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>


    </div>
    </div>
  );
}
}
