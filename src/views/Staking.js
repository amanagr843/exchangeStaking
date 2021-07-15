
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
    height:1500,

  },
  
  appbarm:{
    backgroundColor:'white'
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
  backgroundColor:'black',
 marginLeft:400,
 fontFamily:'Orbitron',
 borderRadius:20
},
cardsm:{
  width:400,
  height:250,
  backgroundColor:'black',
 marginLeft:50,
 borderRadius:20,
 fontFamily:'Orbitron'
},
titlec: {
  fontSize: 34,
  color:'white',
paddingLeft:10,
fontFamily:'Orbitron'
},
titlecm: {
  fontSize: 28,
  color:'white',
paddingLeft:10,
fontFamily:'Orbitron'
},
pos: {
  marginBottom: 12,
},
btn:{
 left:250
},
btnm:{
  left:45,
  fontFamily:'Orbitron'
 },
 content:{
  left:15,
  fontFamily:'Orbitron',
  color:'white',
  fontSize:14
 },
 contentc:{
  fontFamily:'Orbitron',
  color:'white',
  fontSize:16,
  paddingLeft:20
 }
}));
const initialPositionValue = "fixed";

export default function Staking() {
  const classes = useStyles();
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const darkMode = useDarkMode(false);
  let history = useHistory();

  const redirect = () => {
    history.push('/deposit')
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
<div className="rootS">
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
      <Card className={classes.cardsm} variant="outlined" expand style={{background: `url(${bg2})`}}>
      <CardContent>
        <Typography className={classes.titlecm} color="textSecondary" gutterBottom>
        ANTEAGLE
        <Button className={classes.btnm} onClick={redirect}>Deposit</Button>
        </Typography>
<div className={classes.content}>
        
          Rewards End In
          </div>
          <div className={classes.content}>
          Total Deposited
</div> 
<div className={classes.content}>
          Pool Rate
</div>
<div className={classes.content}>        
  APR
</div>        
      </CardContent>
      <CardActions>
       
      </CardActions>
          </Card>

    <Card className={classes.cardsm} variant="outlined" expand style={{background: `url(${bg3})`}}>
      <CardContent>
      <Typography className={classes.titlecm} color="textSecondary" gutterBottom>
        EAGLEANT
        <Button className={classes.btnm} onclick={redirect}>Deposit</Button>
        </Typography>
        <div className={classes.content}>
        
        Rewards End In
        </div>
        <div className={classes.content}>
        Total Deposited
</div> 
<div className={classes.content}>
        Pool Rate
</div>
<div className={classes.content}>        
APR
</div>  
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Card className={classes.cardsm} variant="outlined" expand style={{background: `url(${bg1})`}}>
      <CardContent>
      <Typography className={classes.titlecm} color="textSecondary" gutterBottom>
      EagleToken

        <Button className={classes.btnm} onClick={redirect}>Deposit</Button>
        </Typography>
        <div className={classes.content}>
        
          Rewards End In
          </div>
          <div className={classes.content}>
          Total Deposited
</div> 
<div className={classes.content}>
          Pool Rate
</div>
<div className={classes.content}>        
  APR
</div>  
        </CardContent>
    </Card>

    </div>
    </div>
      );
}
else{
  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //   <>
    //   <GlobalStyles/>
    <div className="rootdd">
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
      <Card className={classes.cards} variant="outlined" expand style={{background: `url(${bg2})`}}>
      <CardContent>
        <Typography className={classes.titlec} color="textSecondary" gutterBottom>
        ANTEAGLE
        <Button className={classes.btn} onClick={redirect}>Deposit</Button>
        </Typography>

        <div className={classes.contentc}>
        
          Rewards End In
          </div>
          <div className={classes.contentc}>
          Total Deposited
</div> 
<div className={classes.contentc}>
          Pool Rate
</div>
<div className={classes.contentc}>        
  APR
</div>  
      </CardContent>
      <CardActions>
       
      </CardActions>
          </Card>

    <Card className={classes.cards} variant="outlined" expand style={{background: `url(${bg3})`}}>
      <CardContent>
      <Typography className={classes.titlec} color="textSecondary" gutterBottom>
        EAGLEANT
        <Button className={classes.btn} onClick={redirect}>Deposit</Button>
        </Typography>
        <div className={classes.contentc}>
        
        Rewards End In
        </div>
        <div className={classes.contentc}>
        Total Deposited
</div> 
<div className={classes.contentc}>
        Pool Rate
</div>
<div className={classes.contentc}>        
APR
</div>  
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Card className={classes.cards} variant="outlined" expand style={{background: `url(${bg1})`}}>
      <CardContent>
      <Typography className={classes.titlec} color="textSecondary" gutterBottom>
      EagleToken
        <Button className={classes.btn} onClick={redirect}>Deposit</Button>
        </Typography>
        <div className={classes.contentc}>
        
        Rewards End In
        </div>
        <div className={classes.contentc}>
        Total Deposited
</div> 
<div className={classes.contentc}>
        Pool Rate
</div>
<div className={classes.contentc}>        
APR
</div>  
        </CardContent>
    </Card>

    </div>
    </div>
  );
}
}
